import { Injectable } from '@nestjs/common';
import { Model } from "mongoose"
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) { }

    async getProducts(): Promise<Product[]> {

        const prods = await this.productModel.find()
        return prods
    }

    async getProduct(name: string): Promise<Product> {

        const prod = await this.productModel.findOne({ name: name })
        return prod
    }

    async createProduct(createProductDTO: Object): Promise<Product> {

        const prod = await this.productModel.create(createProductDTO)
        return prod
    }

    async deleteProduct(id: string): Promise<Product> {

        const deletedProd = await this.productModel.findByIdAndDelete(id)
        return deletedProd

    }

    async updateProduct(id: string, createProductDTO: Object): Promise<Product> {

        const updatedProd = await this.productModel.findByIdAndUpdate(id, createProductDTO, {new: true})
        return updatedProd
    }

}

