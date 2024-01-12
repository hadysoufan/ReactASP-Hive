export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
  owner: string;
  description: string;
  date?: Date ;
}

export class PhotoFormValues {
  id?: string = undefined;
  description: string = "";
  url: string = '';

  constructor(photo?: PhotoFormValues) {
    if (photo) {
      this.id = photo.id;
      this.description = photo.description;
      this.url = photo.url;
    }
  }
}