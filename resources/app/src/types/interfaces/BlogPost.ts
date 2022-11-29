import { BlogPostContent } from 'types/enums/BlogPostContent';

interface ContentBlock<T> {
  type: T,
}

export interface Title1Block extends ContentBlock<BlogPostContent.Title1>{
  text: string,
}

export interface Title2Block extends ContentBlock<BlogPostContent.Title2>{
  text: string,
}

export interface Title3Block extends ContentBlock<BlogPostContent.Title3>{
  text: string,
}

export interface ParagraphBlock extends ContentBlock<BlogPostContent.Paragraph> {
  text: string,
}

export interface ListBlock extends ContentBlock<BlogPostContent.List> {
  items: string[],
}

export interface ImageBlock extends ContentBlock<BlogPostContent.Image>{
  src: string,
}

export interface BlogPost {
  title: string,
  description: string,
  preview: string,
  hero: string
  date: string,
  content: Array<
    Title1Block |
    Title2Block |
    Title3Block |
    ParagraphBlock |
    ListBlock |
    ImageBlock
  >,
}
