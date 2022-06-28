import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Render, Param, Query } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Render("prods")
    @Get("all")
    async getAll() {

        const prods = await this.productService.getProducts()
        return { prods }

    }

    @Render("prods")
    @Post("create")
    async createPost(@Res() res, @Body() product: Object) {

        const prod = await this.productService.createProduct(product)
        const prods = await this.productService.getProducts()

        return { prods }

    }

    @Get("delete/:id")
    async deleteProd(@Res() res, @Param("id") id: string) {

        const prods = await this.productService.getProducts()
        const prod = prods.find((p) => p._id.toString() === id)

        if (!prod) {
            return
        } else {
            await this.productService.deleteProduct(id)
        }

        return res.redirect("/product/all")

    }

}
