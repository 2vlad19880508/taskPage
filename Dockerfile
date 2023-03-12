FROM cypress/included:12.0.0
WORKDIR app
COPY app /app
RUN npm install
RUN npx cypress run --config-file cypress.config.js
ENTRYPOINT []
