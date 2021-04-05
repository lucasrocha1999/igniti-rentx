import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    // return this.categories;
    const all = this.categories;
    return all;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = {
    //   name,
    //   description,
    //   created_at: new Date(),
    // };
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };
