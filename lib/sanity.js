import sanity from "@sanity/client";

export const client = sanityClient({
  projectId: "fg2ect05",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "ski8lammiyqY0EtRZTIpE4wInSsqsgUwxxj4fomOPuiHnC5lZU7NJxz4ewoRUOiyMYhZqQMe88R6AfutwXUVuZkJQOA4IT9P2mZ5cfduFuGBdVV8OFUkvya9OxK2SKD4L4Q29tu7h8DiY69wU4pg5ANvIPddlY707rPSlRQWGPs0SQAaFh4H",
  useCdn: false,
});
