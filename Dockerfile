# Stage 1: Install dependencies
FROM node:22-alpine AS deps
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Build the application
FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Stage 3: Production image
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

RUN addgroup --system --gid 1001 nuxt && \
    adduser --system --uid 1001 nuxt

COPY --from=builder --chown=nuxt:nuxt /app/.output ./.output

USER nuxt

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
