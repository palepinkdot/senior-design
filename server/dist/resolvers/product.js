"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const Product_1 = require("../entities/Product");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const AddProductInput_1 = require("./AddProductInput");
let ProductError = class ProductError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductError.prototype, "message", void 0);
ProductError = __decorate([
    type_graphql_1.ObjectType()
], ProductError);
let ProductResponse = class ProductResponse {
};
__decorate([
    type_graphql_1.Field(() => [ProductError], { nullable: true }),
    __metadata("design:type", Array)
], ProductResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Product_1.Product, { nullable: true }),
    __metadata("design:type", Product_1.Product)
], ProductResponse.prototype, "product", void 0);
ProductResponse = __decorate([
    type_graphql_1.ObjectType()
], ProductResponse);
class ProductResolver {
    addProduct(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let product;
            try {
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Product_1.Product)
                    .values({
                    sku: options.sku,
                    name: options.name,
                    price: parseFloat(options.price),
                    imageUrl: options.imageUrl,
                })
                    .returning("*")
                    .execute();
                product = result.raw[0];
            }
            catch (err) {
                if (err.code === "23505") {
                    return {
                        errors: [
                            {
                                field: "sku",
                                message: "sku already exists",
                            },
                        ],
                    };
                }
            }
            return { product };
        });
    }
    products() {
        return __awaiter(this, void 0, void 0, function* () {
            return Product_1.Product.find();
        });
    }
}
__decorate([
    type_graphql_1.Mutation(() => ProductResponse),
    __param(0, type_graphql_1.Arg("options")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddProductInput_1.AddProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "addProduct", null);
__decorate([
    type_graphql_1.Query(() => [Product_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.js.map