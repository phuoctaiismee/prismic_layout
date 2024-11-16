// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | InputFormSlice
  | ImageFullSlice
  | PaymentCarouselSlice
  | BadgeSlice
  | StoreButtonSlice
  | CardBackgroundSlice
  | ViewMoreButtonSlice
  | DestinationSlice
  | HeadingSlice
  | ControlCarouselSlice
  | CarouselSlice
  | SubTitleSlice
  | SortSectionSlice
  | FilterSectionSlice
  | SearchSectionSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | InputFormSlice
  | ImageFullSlice
  | PaymentCarouselSlice
  | StoreButtonSlice
  | BadgeSlice
  | CardBackgroundSlice
  | ViewMoreButtonSlice
  | DestinationSlice
  | SubTitleSlice
  | HeadingSlice
  | ControlCarouselSlice
  | CarouselSlice
  | SortSectionSlice
  | SearchSectionSlice
  | FilterSectionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomepageDocument | PageDocument;

/**
 * Primary content in *Badge → Default → Primary*
 */
export interface BadgeSliceDefaultPrimary {
  /**
   * Text field in *Badge → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: badge.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Background field in *Badge → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: badge.default.primary.background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background: prismic.ColorField;
}

/**
 * Default variation for Badge Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BadgeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BadgeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Badge*
 */
type BadgeSliceVariation = BadgeSliceDefault;

/**
 * Badge Shared Slice
 *
 * - **API ID**: `badge`
 * - **Description**: Badge
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BadgeSlice = prismic.SharedSlice<"badge", BadgeSliceVariation>;

/**
 * Primary content in *CardBackground → Default → Primary*
 */
export interface CardBackgroundSliceDefaultPrimary {
  /**
   * Image field in *CardBackground → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *CardBackground → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *CardBackground → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Background field in *CardBackground → Default → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.default.primary.background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background: prismic.ColorField;
}

/**
 * Default variation for CardBackground Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardBackgroundSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardBackgroundSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CardBackground → center → Primary*
 */
export interface CardBackgroundSliceCenterPrimary {
  /**
   * Image field in *CardBackground → center → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.center.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *CardBackground → center → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.center.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *CardBackground → center → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.center.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Background field in *CardBackground → center → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: card_background.center.primary.background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background: prismic.ColorField;
}

/**
 * center variation for CardBackground Slice
 *
 * - **API ID**: `center`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardBackgroundSliceCenter = prismic.SharedSliceVariation<
  "center",
  Simplify<CardBackgroundSliceCenterPrimary>,
  never
>;

/**
 * Slice variation for *CardBackground*
 */
type CardBackgroundSliceVariation =
  | CardBackgroundSliceDefault
  | CardBackgroundSliceCenter;

/**
 * CardBackground Shared Slice
 *
 * - **API ID**: `card_background`
 * - **Description**: CardBackground
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardBackgroundSlice = prismic.SharedSlice<
  "card_background",
  CardBackgroundSliceVariation
>;

/**
 * Primary content in *Carousel → Default → Primary*
 */
export interface CarouselSliceDefaultPrimary {
  /**
   * With Control field in *Carousel → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: carousel.default.primary.with_control
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  with_control: prismic.BooleanField;
}

/**
 * Default variation for Carousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CarouselSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Carousel*
 */
type CarouselSliceVariation = CarouselSliceDefault;

/**
 * Carousel Shared Slice
 *
 * - **API ID**: `carousel`
 * - **Description**: Carousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CarouselSlice = prismic.SharedSlice<
  "carousel",
  CarouselSliceVariation
>;

/**
 * Default variation for ControlCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ControlCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ControlCarousel*
 */
type ControlCarouselSliceVariation = ControlCarouselSliceDefault;

/**
 * ControlCarousel Shared Slice
 *
 * - **API ID**: `control_carousel`
 * - **Description**: ControlCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ControlCarouselSlice = prismic.SharedSlice<
  "control_carousel",
  ControlCarouselSliceVariation
>;

/**
 * Default variation for Destination Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DestinationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Destination*
 */
type DestinationSliceVariation = DestinationSliceDefault;

/**
 * Destination Shared Slice
 *
 * - **API ID**: `destination`
 * - **Description**: Destination
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DestinationSlice = prismic.SharedSlice<
  "destination",
  DestinationSliceVariation
>;

/**
 * Default variation for FilterSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FilterSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *FilterSection*
 */
type FilterSectionSliceVariation = FilterSectionSliceDefault;

/**
 * FilterSection Shared Slice
 *
 * - **API ID**: `filter_section`
 * - **Description**: FilterSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FilterSectionSlice = prismic.SharedSlice<
  "filter_section",
  FilterSectionSliceVariation
>;

/**
 * Primary content in *Heading → Default → Primary*
 */
export interface HeadingSliceDefaultPrimary {
  /**
   * Heading field in *Heading → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;
}

/**
 * Default variation for Heading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Heading*
 */
type HeadingSliceVariation = HeadingSliceDefault;

/**
 * Heading Shared Slice
 *
 * - **API ID**: `heading`
 * - **Description**: Heading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSlice = prismic.SharedSlice<
  "heading",
  HeadingSliceVariation
>;

/**
 * Primary content in *ImageFull → Default → Primary*
 */
export interface ImageFullSliceDefaultPrimary {
  /**
   * Image field in *ImageFull → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_full.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageFull Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageFullSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageFullSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ImageFull → Background → Primary*
 */
export interface ImageFullSliceBackgroundPrimary {
  /**
   * Image field in *ImageFull → Background → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_full.background.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Background variation for ImageFull Slice
 *
 * - **API ID**: `background`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageFullSliceBackground = prismic.SharedSliceVariation<
  "background",
  Simplify<ImageFullSliceBackgroundPrimary>,
  never
>;

/**
 * Slice variation for *ImageFull*
 */
type ImageFullSliceVariation = ImageFullSliceDefault | ImageFullSliceBackground;

/**
 * ImageFull Shared Slice
 *
 * - **API ID**: `image_full`
 * - **Description**: ImageFull
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageFullSlice = prismic.SharedSlice<
  "image_full",
  ImageFullSliceVariation
>;

/**
 * Default variation for InputForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InputFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *InputForm*
 */
type InputFormSliceVariation = InputFormSliceDefault;

/**
 * InputForm Shared Slice
 *
 * - **API ID**: `input_form`
 * - **Description**: InputForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InputFormSlice = prismic.SharedSlice<
  "input_form",
  InputFormSliceVariation
>;

/**
 * Default variation for PaymentCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PaymentCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *PaymentCarousel*
 */
type PaymentCarouselSliceVariation = PaymentCarouselSliceDefault;

/**
 * PaymentCarousel Shared Slice
 *
 * - **API ID**: `payment_carousel`
 * - **Description**: PaymentCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PaymentCarouselSlice = prismic.SharedSlice<
  "payment_carousel",
  PaymentCarouselSliceVariation
>;

/**
 * Primary content in *SearchSection → Default → Primary*
 */
export interface SearchSectionSliceDefaultPrimary {
  /**
   * Placeholder field in *SearchSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search_section.default.primary.placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  placeholder: prismic.KeyTextField;
}

/**
 * Default variation for SearchSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SearchSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SearchSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SearchSection*
 */
type SearchSectionSliceVariation = SearchSectionSliceDefault;

/**
 * SearchSection Shared Slice
 *
 * - **API ID**: `search_section`
 * - **Description**: SearchSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SearchSectionSlice = prismic.SharedSlice<
  "search_section",
  SearchSectionSliceVariation
>;

/**
 * Default variation for SortSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SortSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *SortSection*
 */
type SortSectionSliceVariation = SortSectionSliceDefault;

/**
 * SortSection Shared Slice
 *
 * - **API ID**: `sort_section`
 * - **Description**: SortSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SortSectionSlice = prismic.SharedSlice<
  "sort_section",
  SortSectionSliceVariation
>;

/**
 * Primary content in *StoreButton → Default → Primary*
 */
export interface StoreButtonSliceDefaultPrimary {
  /**
   * Type field in *StoreButton → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: store_button.default.primary.type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"google" | "appstore">;
}

/**
 * Default variation for StoreButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StoreButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StoreButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *StoreButton*
 */
type StoreButtonSliceVariation = StoreButtonSliceDefault;

/**
 * StoreButton Shared Slice
 *
 * - **API ID**: `store_button`
 * - **Description**: StoreButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StoreButtonSlice = prismic.SharedSlice<
  "store_button",
  StoreButtonSliceVariation
>;

/**
 * Primary content in *SubTitle → Default → Primary*
 */
export interface SubTitleSliceDefaultPrimary {
  /**
   * Text field in *SubTitle → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_title.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for SubTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SubTitle*
 */
type SubTitleSliceVariation = SubTitleSliceDefault;

/**
 * SubTitle Shared Slice
 *
 * - **API ID**: `sub_title`
 * - **Description**: SubTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSlice = prismic.SharedSlice<
  "sub_title",
  SubTitleSliceVariation
>;

/**
 * Default variation for ViewMoreButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ViewMoreButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ViewMoreButton*
 */
type ViewMoreButtonSliceVariation = ViewMoreButtonSliceDefault;

/**
 * ViewMoreButton Shared Slice
 *
 * - **API ID**: `view_more_button`
 * - **Description**: ViewMoreButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ViewMoreButtonSlice = prismic.SharedSlice<
  "view_more_button",
  ViewMoreButtonSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BadgeSlice,
      BadgeSliceDefaultPrimary,
      BadgeSliceVariation,
      BadgeSliceDefault,
      CardBackgroundSlice,
      CardBackgroundSliceDefaultPrimary,
      CardBackgroundSliceCenterPrimary,
      CardBackgroundSliceVariation,
      CardBackgroundSliceDefault,
      CardBackgroundSliceCenter,
      CarouselSlice,
      CarouselSliceDefaultPrimary,
      CarouselSliceVariation,
      CarouselSliceDefault,
      ControlCarouselSlice,
      ControlCarouselSliceVariation,
      ControlCarouselSliceDefault,
      DestinationSlice,
      DestinationSliceVariation,
      DestinationSliceDefault,
      FilterSectionSlice,
      FilterSectionSliceVariation,
      FilterSectionSliceDefault,
      HeadingSlice,
      HeadingSliceDefaultPrimary,
      HeadingSliceVariation,
      HeadingSliceDefault,
      ImageFullSlice,
      ImageFullSliceDefaultPrimary,
      ImageFullSliceBackgroundPrimary,
      ImageFullSliceVariation,
      ImageFullSliceDefault,
      ImageFullSliceBackground,
      InputFormSlice,
      InputFormSliceVariation,
      InputFormSliceDefault,
      PaymentCarouselSlice,
      PaymentCarouselSliceVariation,
      PaymentCarouselSliceDefault,
      SearchSectionSlice,
      SearchSectionSliceDefaultPrimary,
      SearchSectionSliceVariation,
      SearchSectionSliceDefault,
      SortSectionSlice,
      SortSectionSliceVariation,
      SortSectionSliceDefault,
      StoreButtonSlice,
      StoreButtonSliceDefaultPrimary,
      StoreButtonSliceVariation,
      StoreButtonSliceDefault,
      SubTitleSlice,
      SubTitleSliceDefaultPrimary,
      SubTitleSliceVariation,
      SubTitleSliceDefault,
      ViewMoreButtonSlice,
      ViewMoreButtonSliceVariation,
      ViewMoreButtonSliceDefault,
    };
  }
}
