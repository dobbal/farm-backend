import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Admin Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("admin"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Categories (Agriculture, Horticulture, Animal Husbandry, Garden)
export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  icon: text("icon"),
});

export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Crops/Livestock table
export const crops = pgTable("crops", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  scientificName: text("scientific_name"),
  categoryId: varchar("category_id").references(() => categories.id),
  icon: text("icon"),
});

export const insertCropSchema = createInsertSchema(crops).omit({ id: true });
export type InsertCrop = z.infer<typeof insertCropSchema>;
export type Crop = typeof crops.$inferSelect;

// Production Guides
export const productionGuides = pgTable("production_guides", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cropId: varchar("crop_id").references(() => crops.id).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  seasonOverview: text("season_overview"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertProductionGuideSchema = createInsertSchema(productionGuides).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertProductionGuide = z.infer<typeof insertProductionGuideSchema>;
export type ProductionGuide = typeof productionGuides.$inferSelect;

// Diseases/Pests table
export const diseases = pgTable("diseases", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cropId: varchar("crop_id").references(() => crops.id).notNull(),
  name: text("name").notNull(),
  description: text("description"),
  severity: text("severity").notNull().default("Medium"),
  lifecycle: text("lifecycle"),
  prevention: text("prevention"),
  treatment: text("treatment"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertDiseaseSchema = createInsertSchema(diseases).omit({ id: true, createdAt: true });
export type InsertDisease = z.infer<typeof insertDiseaseSchema>;
export type Disease = typeof diseases.$inferSelect;

// Products (Chemicals, Bio-stimulants, Technology)
export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
  inStock: boolean("in_stock").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true, createdAt: true });
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Customer Registration
export const customers = pgTable("customers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull().unique(),
  email: text("email"),
  age: integer("age"),
  gender: text("gender"),
  consentGiven: boolean("consent_given").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCustomerSchema = createInsertSchema(customers).omit({ id: true, createdAt: true });
export type InsertCustomer = z.infer<typeof insertCustomerSchema>;
export type Customer = typeof customers.$inferSelect;

// Customer Crops (many crops per customer)
export const customerCrops = pgTable("customer_crops", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerId: varchar("customer_id").references(() => customers.id).notNull(),
  cropName: text("crop_name").notNull(),
  area: decimal("area", { precision: 10, scale: 2 }).notNull(),
  location: text("location").notNull(),
});

export const insertCustomerCropSchema = createInsertSchema(customerCrops).omit({ id: true });
export type InsertCustomerCrop = z.infer<typeof insertCustomerCropSchema>;
export type CustomerCrop = typeof customerCrops.$inferSelect;

// Orders
export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerId: varchar("customer_id").references(() => customers.id),
  status: text("status").notNull().default("pending"),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text("payment_method"),
  paymentId: text("payment_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({ id: true, createdAt: true });
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

// Order Items
export const orderItems = pgTable("order_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  orderId: varchar("order_id").references(() => orders.id).notNull(),
  productId: varchar("product_id").references(() => products.id).notNull(),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

export const insertOrderItemSchema = createInsertSchema(orderItems).omit({ id: true });
export type InsertOrderItem = z.infer<typeof insertOrderItemSchema>;
export type OrderItem = typeof orderItems.$inferSelect;

// Cart items (stored per session/customer)
export const cartItems = pgTable("cart_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  productId: varchar("product_id").references(() => products.id).notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCartItemSchema = createInsertSchema(cartItems).omit({ id: true, createdAt: true });
export type InsertCartItem = z.infer<typeof insertCartItemSchema>;
export type CartItem = typeof cartItems.$inferSelect;
