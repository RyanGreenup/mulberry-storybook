pre-commit:
    git add -A
    npx run prettier --write */**/*.tsx
    bun run build-storybook
run:
    bun run storybook -- --host '0.0.0.0' --port 6006
