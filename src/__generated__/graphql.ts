/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

/** The possible account status that user can have */
export enum AccountStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Inactive = 'INACTIVE',
}

export type AddressInput = {
  id: Scalars['Float']
}

export type AddressInputs = {
  district?: InputMaybe<Scalars['Int']>
  municipality?: InputMaybe<Scalars['Int']>
  province?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<AddressType>
  ward?: InputMaybe<Scalars['Int']>
}

export type AddressSchema = {
  __typename?: 'AddressSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  district?: Maybe<DistrictSchema>
  id?: Maybe<Scalars['ID']>
  municipality?: Maybe<MunicipalitySchema>
  province?: Maybe<ProvinceSchema>
  type: AddressType
  updatedAt?: Maybe<Scalars['DateTime']>
  ward?: Maybe<WardSchema>
}

/** The possible address type that user can have */
export enum AddressType {
  Both = 'BOTH',
  Permanent = 'PERMANENT',
  Temporary = 'TEMPORARY',
}

export type AdminInput = {
  details: DetailsInput
  email: Scalars['String']
  password: Scalars['String']
  permissions: Array<Permission>
  role: Role
  roleLevel: Scalars['Float']
}

export type AdminLoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type AdminLoginSchema = {
  __typename?: 'AdminLoginSchema'
  accessToken?: Maybe<Scalars['String']>
  admin: AdminSchema
  refreshToken?: Maybe<Scalars['String']>
}

export type AdminSchema = {
  __typename?: 'AdminSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  details: DetailsSchema
  email: Scalars['String']
  id?: Maybe<Scalars['ID']>
  permissions: Array<Permission>
  role: Role
  roleLevel: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ArgsInput = {
  id: Scalars['String']
}

export type BannerInput = {
  description?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  media: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Float']>
}

export type BannerSchema = {
  __typename?: 'BannerSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  link?: Maybe<Scalars['String']>
  media: MediaSchema
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type BrandInput = {
  logo: Scalars['String']
  name: Scalars['String']
}

export type BrandSchema = {
  __typename?: 'BrandSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  logo: MediaSchema
  name: Scalars['String']
  products: Array<ProductSchema>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CarouselInput = {
  description?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  media: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Float']>
}

export type CarouselSchema = {
  __typename?: 'CarouselSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  link?: Maybe<Scalars['String']>
  media: MediaSchema
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Float']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CartInput = {
  items: Array<CartItemInput>
}

export type CartItemInput = {
  color: Scalars['String']
  product?: InputMaybe<Scalars['String']>
  quantity: Scalars['Float']
  size: Scalars['String']
  variant?: InputMaybe<Scalars['String']>
}

export type CartItemSchema = {
  __typename?: 'CartItemSchema'
  cart: CartSchema
  color: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  product?: Maybe<ProductSchema>
  quantity: Scalars['Float']
  size: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  variant?: Maybe<VariantSchema>
}

export type CartSchema = {
  __typename?: 'CartSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  isCurrent: Scalars['Boolean']
  items: Array<CartItemSchema>
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserSchema
}

export type CategoryInput = {
  name: Scalars['String']
  thumbnail: Scalars['String']
  type: Scalars['String']
}

export type CategorySchema = {
  __typename?: 'CategorySchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  media: TypeSchema
  name: Scalars['String']
  subCategories?: Maybe<Array<SubCategorySchema>>
  thumbnail: MediaSchema
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CategoryUpdateInput = {
  name: Scalars['String']
  thumbnail: Scalars['String']
  type: Scalars['String']
}

export type DetailsInput = {
  address?: InputMaybe<AddressInputs>
  firstName: OptionalMultiLanguageInput
  lastName: OptionalMultiLanguageInput
  middleName?: InputMaybe<OptionalMultiLanguageInput>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type DetailsSchema = {
  __typename?: 'DetailsSchema'
  address?: Maybe<AddressSchema>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  firstName: MultiLanguageSchema
  id?: Maybe<Scalars['ID']>
  lastName: MultiLanguageSchema
  middleName?: Maybe<MultiLanguageSchema>
  phoneNumber?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DistrictSchema = {
  __typename?: 'DistrictSchema'
  code: Scalars['Float']
  districtTitle: Scalars['String']
  districtTitleNepali: Scalars['String']
  id: Scalars['ID']
}

export type MediaSchema = {
  __typename?: 'MediaSchema'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  mimeType: Scalars['String']
  name: Scalars['String']
  path?: Maybe<Scalars['String']>
  type: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Media Type */
export enum MediaType {
  Banner = 'BANNER',
  Carousel = 'CAROUSEL',
  CitizenshipBack = 'CITIZENSHIP_BACK',
  CitizenshipCopy = 'CITIZENSHIP_COPY',
  CitizenshipFront = 'CITIZENSHIP_FRONT',
  Document = 'DOCUMENT',
  Logo = 'LOGO',
  ProfileImage = 'PROFILE_IMAGE',
  Signature = 'SIGNATURE',
  Thumbnail = 'THUMBNAIL',
}

export type MultiLanguageSchema = {
  __typename?: 'MultiLanguageSchema'
  en?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
}

export type MunicipalitySchema = {
  __typename?: 'MunicipalitySchema'
  code: Scalars['Float']
  id: Scalars['ID']
  municipalityTitle: Scalars['String']
  municipalityTitleNepali: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Admin login */
  adminLogin: AdminLoginSchema
  /** Creates a new admin */
  createAdmin: AdminSchema
  /** Create a new banner */
  createBanner: BannerSchema
  /** Create a new brand */
  createBrand: BrandSchema
  /** Create a new carousel */
  createCarousel: CarouselSchema
  /** Create a new cart */
  createCart: CartSchema
  /** Create a new category */
  createCategory: CategorySchema
  /** Create a new order */
  createOrder: OrderSchema
  /** Create a new product */
  createProduct: ProductSchema
  /** Create a new products section */
  createProductsSection: ProductsSectionSchema
  /** Create new site settings */
  createSiteSettings: SiteSettingsSchema
  /** Create a new sub-category */
  createSubCategory: SubCategorySchema
  /** Create a new type */
  createType: TypeSchema
  /** Deletes an admin */
  deleteAdmin: AdminSchema
  /** Delete a banner */
  deleteBanner: BannerSchema
  /** Delete a brand */
  deleteBrand: BrandSchema
  /** Delete a carousel */
  deleteCarousel: CarouselSchema
  /** Delete a cart */
  deleteCart: CartSchema
  /** Delete a category */
  deleteCategory: CategorySchema
  /** Delete a order */
  deleteOrder: OrderSchema
  /** Delete a product */
  deleteProduct: ProductSchema
  /** Delete a category */
  deleteProductsSection: ProductsSectionSchema
  /** Delete a category */
  deleteSubCategory: SubCategorySchema
  /** Delete a type */
  deleteType: TypeSchema
  /** Uploads multiple files to the server and saves it to the database */
  multipleUpload: Array<MediaSchema>
  /** Uploads a file to the server and saves it to the database */
  singleUpload?: Maybe<MediaSchema>
  /** Updates an admin */
  updateAdmin: AdminSchema
  /** Update a banner */
  updateBanner: BannerSchema
  /** Update a brand */
  updateBrand: BrandSchema
  /** Update a carousel */
  updateCarousel: CarouselSchema
  /** Update a cart */
  updateCart: CartSchema
  /** Update a category */
  updateCategory: CategorySchema
  /** Update a products section */
  updateProductsSection: ProductsSectionSchema
  /** Update site settings */
  updateSiteSettings: SiteSettingsSchema
  /** Update a category */
  updateSubCategory: SubCategorySchema
  /** Update a type */
  updateType: TypeSchema
  userSignup: UserSchema
}

export type MutationAdminLoginArgs = {
  data: AdminLoginInput
}

export type MutationCreateAdminArgs = {
  data: AdminInput
}

export type MutationCreateBannerArgs = {
  data: BannerInput
}

export type MutationCreateBrandArgs = {
  data: BrandInput
}

export type MutationCreateCarouselArgs = {
  data: CarouselInput
}

export type MutationCreateCartArgs = {
  data: CartInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryInput
}

export type MutationCreateOrderArgs = {
  data: OrderInput
}

export type MutationCreateProductArgs = {
  data: ProductInput
}

export type MutationCreateProductsSectionArgs = {
  data: ProductsSectionInput
}

export type MutationCreateSiteSettingsArgs = {
  data: ProductsSectionInput
}

export type MutationCreateSubCategoryArgs = {
  data: SubCategoryInput
}

export type MutationCreateTypeArgs = {
  data: TypeInput
}

export type MutationDeleteAdminArgs = {
  args: ArgsInput
}

export type MutationDeleteBannerArgs = {
  args: ArgsInput
}

export type MutationDeleteBrandArgs = {
  args: ArgsInput
}

export type MutationDeleteCarouselArgs = {
  args: ArgsInput
}

export type MutationDeleteCartArgs = {
  args: ArgsInput
}

export type MutationDeleteCategoryArgs = {
  args: ArgsInput
}

export type MutationDeleteOrderArgs = {
  args: ArgsInput
}

export type MutationDeleteProductArgs = {
  args: ArgsInput
}

export type MutationDeleteProductsSectionArgs = {
  args: ArgsInput
}

export type MutationDeleteSubCategoryArgs = {
  args: ArgsInput
}

export type MutationDeleteTypeArgs = {
  args: ArgsInput
}

export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>
  type: MediaType
}

export type MutationSingleUploadArgs = {
  file: Scalars['Upload']
  type: MediaType
}

export type MutationUpdateAdminArgs = {
  data: AdminInput
  id: Scalars['String']
}

export type MutationUpdateBannerArgs = {
  data: BannerInput
  id: Scalars['String']
}

export type MutationUpdateBrandArgs = {
  data: BrandInput
  id: Scalars['String']
}

export type MutationUpdateCarouselArgs = {
  data: CarouselInput
  id: Scalars['String']
}

export type MutationUpdateCartArgs = {
  data: CartInput
}

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  id: Scalars['String']
}

export type MutationUpdateProductsSectionArgs = {
  data: ProductsSectionInput
  id: Scalars['String']
}

export type MutationUpdateSiteSettingsArgs = {
  data: ProductsSectionInput
}

export type MutationUpdateSubCategoryArgs = {
  data: SubCategoryUpdateInput
  id: Scalars['String']
}

export type MutationUpdateTypeArgs = {
  data: TypeUpdateInput
  id: Scalars['String']
}

export type MutationUserSignupArgs = {
  data: UserInput
}

export type OptionalMultiLanguageInput = {
  en: Scalars['String']
  ne?: InputMaybe<Scalars['String']>
}

export type OrderInput = {
  billingAddress: AddressInputs
  items: Array<OrderItemInput>
  shippingAddress: AddressInputs
}

export type OrderItemActivitySchema = {
  __typename?: 'OrderItemActivitySchema'
  createdAt?: Maybe<Scalars['DateTime']>
  date: Scalars['DateTime']
  deletedAt?: Maybe<Scalars['DateTime']>
  event: Scalars['String']
  id?: Maybe<Scalars['ID']>
  performedBy: AdminSchema
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type OrderItemInput = {
  color: Scalars['String']
  deliveredDate?: InputMaybe<Scalars['String']>
  price: Scalars['Float']
  product?: InputMaybe<Scalars['String']>
  quantity: Scalars['Float']
  size: Scalars['String']
  variant?: InputMaybe<Scalars['String']>
}

export type OrderItemSchema = {
  __typename?: 'OrderItemSchema'
  activities: Array<OrderItemActivitySchema>
  color: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deliveredDate?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  price: Scalars['Float']
  product?: Maybe<ProductSchema>
  quantity: Scalars['Float']
  size: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  variant?: Maybe<VariantSchema>
}

export type OrderSchema = {
  __typename?: 'OrderSchema'
  billingAddress: AddressSchema
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  items: Array<OrderItemSchema>
  shippingAddress: AddressSchema
  updatedAt?: Maybe<Scalars['DateTime']>
  user: UserSchema
}

/** The permissions that admin can have */
export enum Permission {
  CreateProduct = 'CREATE_PRODUCT',
}

export type ProductInput = {
  brand?: InputMaybe<Scalars['String']>
  colors: Array<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  discount?: InputMaybe<Scalars['Float']>
  itemsInStock?: InputMaybe<Scalars['Float']>
  manufacturer?: InputMaybe<Scalars['String']>
  markedPrice: Scalars['Float']
  media: Array<Scalars['String']>
  name: Scalars['String']
  sizes: Array<Size>
  specification?: InputMaybe<Scalars['String']>
  subCategory: Scalars['String']
  tags?: InputMaybe<Array<Scalars['String']>>
  variants: Array<VariantInput>
}

export type ProductSchema = {
  __typename?: 'ProductSchema'
  brand?: Maybe<Scalars['String']>
  colors: Array<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  itemsInStock?: Maybe<Scalars['Float']>
  manufacturer?: Maybe<Scalars['String']>
  markedPrice: Scalars['Float']
  media: Array<MediaSchema>
  name: Scalars['String']
  sizes: Array<Size>
  specification?: Maybe<Scalars['String']>
  subCategory: SubCategorySchema
  tags?: Maybe<Array<Scalars['String']>>
  updatedAt?: Maybe<Scalars['DateTime']>
  variants: Array<VariantSchema>
}

export type ProductsSectionInput = {
  expiresIn?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  order: Scalars['Float']
  products: Array<Scalars['String']>
  startsIn?: InputMaybe<Scalars['String']>
}

export type ProductsSectionSchema = {
  __typename?: 'ProductsSectionSchema'
  expiresIn?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  order: Scalars['Float']
  products: Array<ProductSchema>
  startsIn?: Maybe<Scalars['DateTime']>
}

export type ProfilePictureInput = {
  profilePicture: Scalars['String']
}

export type ProvinceSchema = {
  __typename?: 'ProvinceSchema'
  code: Scalars['Float']
  id: Scalars['ID']
  provinceTitle: Scalars['String']
  provinceTitleNepali: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  /** Returns a single admin */
  admin: AdminSchema
  /** Returns list of admins */
  admins: Array<AdminSchema>
  /** Get a banner */
  banner: BannerSchema
  /** Get all banners */
  banners: Array<BannerSchema>
  /** Get a brand */
  brand: BrandSchema
  /** Get all brands */
  brands: Array<BrandSchema>
  /** Get a carousel */
  carousel: CarouselSchema
  /** Get all carousels */
  carousels: Array<CarouselSchema>
  /** Returns a cart */
  cart: CartSchema
  /** Returns all categories */
  carts: Array<CartSchema>
  /** Returns all categories */
  categories: Array<CategorySchema>
  /** Returns a category */
  category: CategorySchema
  /** Updates user profile picture */
  changeProfilePicture: UserSchema
  /** Returns all districts */
  districts: Array<DistrictSchema>
  /** Returns list of districts based on province ID */
  districtsByProvince: Array<DistrictSchema>
  /** Returns own details */
  me: UserSchema
  /** Returns list of municipalities based on district ID */
  municipalities: Array<MunicipalitySchema>
  /** Returns a order */
  order: OrderSchema
  /** Returns all orders */
  orders: Array<OrderSchema>
  ping: Scalars['String']
  /** Find a product */
  product: ProductSchema
  /** Find products */
  products: Array<ProductSchema>
  /** Returns a products section */
  productsSection: ProductsSectionSchema
  /** Returns list of provinces */
  provinces: Array<ProvinceSchema>
  /** Returns a site setting */
  siteSetting: SiteSettingsSchema
  /** Returns all products section */
  subCategories: Array<ProductsSectionSchema>
  /** Returns a sub-category */
  subCategory: SubCategorySchema
  /** Returns a type */
  type: TypeSchema
  /** Returns all types */
  types: Array<TypeSchema>
  /** Get user by id */
  user: UserSchema
  /** Get all users */
  users: Array<UserSchema>
  /** Returns list of wards based on municipality ID */
  wards: Array<WardSchema>
}

export type QueryAdminArgs = {
  args: ArgsInput
}

export type QueryBannerArgs = {
  args: ArgsInput
}

export type QueryBrandArgs = {
  args: ArgsInput
}

export type QueryCarouselArgs = {
  args: ArgsInput
}

export type QueryCartArgs = {
  args: ArgsInput
}

export type QueryCategoryArgs = {
  args: ArgsInput
}

export type QueryChangeProfilePictureArgs = {
  data: ProfilePictureInput
}

export type QueryDistrictsByProvinceArgs = {
  data: AddressInput
}

export type QueryMunicipalitiesArgs = {
  data: AddressInput
}

export type QueryOrderArgs = {
  args: ArgsInput
}

export type QueryProductArgs = {
  args: ArgsInput
}

export type QueryProductsSectionArgs = {
  args: ArgsInput
}

export type QuerySubCategoryArgs = {
  args: ArgsInput
}

export type QueryTypeArgs = {
  args: ArgsInput
}

export type QueryUserArgs = {
  args: ArgsInput
}

export type QueryWardsArgs = {
  data: AddressInput
}

/** The roles that admin user can have */
export enum Role {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER',
}

export type SiteSettingsSchema = {
  __typename?: 'SiteSettingsSchema'
  contactNumber: Array<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deliveryCharge: Scalars['Float']
  email: Scalars['String']
  facebookLink: Scalars['String']
  googleLink: Scalars['String']
  googleMapLink: Scalars['String']
  id?: Maybe<Scalars['ID']>
  instagramLink: Scalars['String']
  name: Scalars['String']
  tiktokLink: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Possible sizes of a product */
export enum Size {
  L = 'L',
  Large = 'LARGE',
  M = 'M',
  Medium = 'MEDIUM',
  S = 'S',
  Small = 'SMALL',
  Xl = 'XL',
  Xs = 'XS',
  Xxl = 'XXL',
}

export type SubCategoryInput = {
  category: Scalars['String']
  name: Scalars['String']
  thumbnail: Scalars['String']
}

export type SubCategorySchema = {
  __typename?: 'SubCategorySchema'
  category: CategorySchema
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  products?: Maybe<Array<ProductSchema>>
  thumbnail: MediaSchema
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SubCategoryUpdateInput = {
  category: Scalars['String']
  name: Scalars['String']
  thumbnail: Scalars['String']
}

export type TypeInput = {
  name: Scalars['String']
  thumbnail: Scalars['String']
}

export type TypeSchema = {
  __typename?: 'TypeSchema'
  categories?: Maybe<Array<CategorySchema>>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  thumbnail: MediaSchema
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TypeUpdateInput = {
  name: Scalars['String']
  thumbnail: Scalars['String']
}

export type UserDetailsInput = {
  address?: InputMaybe<AddressInputs>
  firstName: OptionalMultiLanguageInput
  lastName?: InputMaybe<OptionalMultiLanguageInput>
  middleName?: InputMaybe<OptionalMultiLanguageInput>
}

export type UserDetailsSchema = {
  __typename?: 'UserDetailsSchema'
  address?: Maybe<AddressSchema>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  firstName: MultiLanguageSchema
  id?: Maybe<Scalars['ID']>
  lastName: MultiLanguageSchema
  middleName?: Maybe<MultiLanguageSchema>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserInput = {
  details: UserDetailsInput
  email: Scalars['String']
  password: Scalars['String']
  phoneNumber: Scalars['String']
}

export type UserSchema = {
  __typename?: 'UserSchema'
  accountStatus: AccountStatus
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  details: UserDetailsSchema
  email: Scalars['String']
  id?: Maybe<Scalars['ID']>
  phoneNumber: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type VariantInput = {
  color?: InputMaybe<Scalars['String']>
  media?: InputMaybe<Array<Scalars['String']>>
  name: Scalars['String']
  price?: InputMaybe<Scalars['Float']>
  size?: InputMaybe<Scalars['String']>
}

export type VariantSchema = {
  __typename?: 'VariantSchema'
  color?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  media?: Maybe<Array<MediaSchema>>
  name: Scalars['String']
  price?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type WardSchema = {
  __typename?: 'WardSchema'
  id: Scalars['ID']
  wardNumber: Scalars['Float']
  wardNumberNepali: Scalars['String']
}
