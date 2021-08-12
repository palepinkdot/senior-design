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
exports.CartResolver = void 0;
const Cart_1 = require("../entities/Cart");
const isAuth_1 = require("../middleware/isAuth");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const CartItem_1 = require("../entities/CartItem");
let CartError = class CartError {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CartError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CartError.prototype, "message", void 0);
CartError = __decorate([
    type_graphql_1.ObjectType()
], CartError);
let CartResponse = class CartResponse {
};
__decorate([
    type_graphql_1.Field(() => [CartError], { nullable: true }),
    __metadata("design:type", Array)
], CartResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => Cart_1.Cart, { nullable: true }),
    __metadata("design:type", Cart_1.Cart)
], CartResponse.prototype, "cart", void 0);
CartResponse = __decorate([
    type_graphql_1.ObjectType()
], CartResponse);
class CartResolver {
    cart({ req }) {
        console.log("Trying to find cart for", req.session.userId);
        return Cart_1.Cart.findOne(req.session.userId);
    }
    createCart({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let cart;
            try {
                const result = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Cart_1.Cart)
                    .values({
                    id: req.session.userId,
                })
                    .returning("*")
                    .execute();
                cart = result.raw[0];
            }
            catch (err) {
                if (err.code === "23505") {
                    return {
                        errors: [
                            {
                                field: "cart",
                                message: `cart already generated`,
                            },
                        ],
                    };
                }
            }
            return { cart };
        });
    }
    addToCart(pid, sku, price, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(CartItem_1.CartItem)
                .values({
                productId: pid,
                cartId: req.session.userId,
                productSku: sku,
                unitCost: price,
                quantity: 1,
            })
                .returning("*")
                .execute();
            return Cart_1.Cart.findOne(req.session.userId);
        });
    }
}
__decorate([
    type_graphql_1.Query(() => Cart_1.Cart, { nullable: true }),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartResolver.prototype, "cart", null);
__decorate([
    type_graphql_1.Mutation(() => CartResponse),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "createCart", null);
__decorate([
    type_graphql_1.Mutation(() => Cart_1.Cart),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Arg("productId")),
    __param(1, type_graphql_1.Arg("productSku")),
    __param(2, type_graphql_1.Arg("unitCost")),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Object]),
    __metadata("design:returntype", Promise)
], CartResolver.prototype, "addToCart", null);
exports.CartResolver = CartResolver;
//# sourceMappingURL=cart.js.map