const CategoryModel = require("@categories/models");
const Validate = require("fastest-validator");
const HttpStatus = require("http-status-codes");
const slug = require("slugify");

class CategoryService {
  constructor() {
    this.categoryModel = new CategoryModel();
    this.validator = new Validate();
    this.schema = {
      name: {
        type: "string",
        min: 3
      }
    };
  }

  async create(data) {
    if (!data.name) {
      data.slug = "";
    }
    data.slug = slug(data.name, {
      replacement: "-",
      remove: null,
      lower: true
    });

    const category = {
      name: data.name,
      slug: data.slug,
      description: data.description
    };

    const isFormValid = this.validator.validate(category, this.schema);

    if (isFormValid !== true) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: {
          error_code: "FORM_VALIDATION",
          message: isFormValid
        }
      };
    }

    const categoryExist = await this.categoryValidation(category);

    if (categoryExist !== true) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: {
          error_code: "DATA_VALIDATION",
          message: categoryExist
        }
      };
    }

    const categorySave = await this.categoryModel.create(category);

    if (categorySave.affectedRows === 0) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error"
      };
    }

    return {
      status: HttpStatus.NO_CONTENT
    };
  }

  async categoryValidation(category) {
    const { slug } = category;

    const categoryWithSlug = await this.categoryModel.getCateBySlug(slug);

    if (categoryWithSlug.length > 0) {
      return [
        {
          message: "Category already exist"
        }
      ];
    }

    return true;
  }
}

module.exports = CategoryService;
