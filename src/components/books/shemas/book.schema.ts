import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/components/users/shemas/user.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  pages: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  addedBy: User;
}

export const BookSchema = SchemaFactory.createForClass(Book);
