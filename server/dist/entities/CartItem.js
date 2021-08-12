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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
const Product_1 = require("./Product");
let CartItem = class CartItem extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], CartItem.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.OneToOne(() => Product_1.Product, (product) => product.id),
    __metadata("design:type", String)
], CartItem.prototype, "productId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.OneToOne(() => Cart_1.Cart, (cart) => cart.id),
    __metadata("design:type", String)
], CartItem.prototype, "cartId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.OneToOne(() => Product_1.Product, (product) => product.sku),
    __metadata("design:type", String)
], CartItem.prototype, "productSku", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.OneToOne(() => Product_1.Product, (product) => product.price),
    __metadata("design:type", Number)
], CartItem.prototype, "unitCost", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], CartItem.prototype, "createdAt", void 0);
CartItem = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], CartItem);
exports.CartItem = CartItem;
//# sourceMappingURL=CartItem.js.map