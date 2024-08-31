module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Apartments",
    description: "Nawy API",
    termsOfService: "http://api_url/terms/",
    contact: {
      name: "Khaled Kassab",
      email: "khaledskassab@gmail.com",
      url: "https://khaled.kassab.com/",
    },
  },
  servers: [
    {
      url: "http://localhost:8080/",
      description: "Local server",
    },
    // {
    //   url: "https://api_url_testing",
    //   description: "Testing server",
    // },
    // {
    //   url: "https://api_url_production",
    //   description: "Production server",
    // },
  ],
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  tags: [
    {
      name: "CRUD operations",
    },
  ],
  paths: {
    "/apartments/{id}": {
      get: {
        tags: ["CRUD operations"],
        description: "Get Specific Apartment details by Id",
        operationId: "getApartmentById",
        parameters: [
          {
            name: "id",
            in: "query",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "Apartment were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Apartment",
                },
              },
            },
          },
          400: {
            description: "Missing parameters",
            content: {
              "application/json": {
                example: {
                  message: "project is missing",
                  internal_code: "missing_parameters",
                },
              },
            },
          },
        },
      },
    },
    "/apartments": {
      get: {
        tags: ["CRUD operations"],
        description: "Get All Apartments",
        operationId: "getAllApartments",
        responses: {
          200: {
            description: "Apartments were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Apartment",
                },
              },
            },
          },
          400: {
            description: "Missing parameters",
            content: {
              "application/json": {
                example: {
                  message: "project is missing",
                  internal_code: "missing_parameters",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["CRUD operations"],
        description: "Create new apartment",
        operationId: "CreateApartment",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Apartment",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "New apartment were created",
          },
          400: {
            description: "Error occured while adding apartment",
            content: {
              "application/json": {
                example: {
                  message: "Apartment already exist",
                  internal_code: "invalid_parameters",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      referenceNumber: {
        type: "number",
        description: "Apartment Reference number",
      },
      unitName: {
        type: "string",
        example:
          "Apartment for sale in ZED East with 1 bedroom in New Cairo by Ora Developers",
      },
      project: {
        type: "string",
        description: "Name of the Project that this Apartment is located in",
        example: "ZED",
      },
      image: {
        type: "string",
        description: "Default image url if the apartment",
      },
      areaInMetersSquared: {
        type: "number",
        description: "Total area of the apartment in squared meters",
      },
      address: {
        type: "number",
        description: "Apartment Address",
      },
      price: {
        type: "number",
        description: "Total price of the apartment",
      },
      bedrooms: {
        type: "number",
        description: "Total number of bedrooms in the apartment",
      },
      bathrooms: {
        type: "number",
        description: "Total number of bathrooms in the apartment",
      },
      status: {
        type: "string",
        description: "Apartment status",
        example: "Delivered",
      },
      saleType: {
        type: "string",
        description: "Apartment Sale Type",
        example: "Developer Sale",
      },
      isAvailable: {
        type: "boolean",
      },
      Apartment: {
        type: "object",
        properties: {
          referenceNumber: {
            $ref: "#/components/schemas/referenceNumber",
          },
          unitName: {
            $ref: "#/components/schemas/unitName",
          },
          project: {
            $ref: "#/components/schemas/project",
          },
          image: {
            $ref: "#/components/schemas/image",
          },
          areaInMetersSquared: {
            $ref: "#/components/schemas/areaInMetersSquared",
          },
          price: {
            $ref: "#/components/schemas/price",
          },
          bedrooms: {
            $ref: "#/components/schemas/bedrooms",
          },
          bathrooms: {
            $ref: "#/components/schemas/bathrooms",
          },
          status: {
            $ref: "#/components/schemas/status",
          },
          saleType: {
            $ref: "#/components/schemas/saleType",
          },
          isAvailable: {
            $ref: "#/components/schemas/isAvailable",
          },
        },
      },
    },
  },
};
