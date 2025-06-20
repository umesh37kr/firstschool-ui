# Use the official Next.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app files
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight image for the final container
FROM node:18-alpine AS runner

WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the Next.js default port
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "run", "start"]
