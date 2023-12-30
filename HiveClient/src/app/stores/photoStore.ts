import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent.ts";
import { Photo } from "../models/photos.ts";

export default class PhotoStore {
  photoRegistery = new Map<string, Photo>();
  selectedPhoto: Photo | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get photosByDate() {
    return Array.from(this.photoRegistery.values()).sort(
      (a, b) => a.date!.getTime() - b.date!.getTime()
    );
  }

  loadPhotos = async () => {
    try {
      const photos = await agent.Photos.list();
      photos.forEach((photo) => {
        this.setPhoto(photo);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadPhoto = async (id: string) => {
    let photo = this.getPhoto(id);
    if (photo !== undefined) {
      runInAction(() => {
        this.selectedPhoto = photo!;
      });
    } else {
      this.setLoadingInitial(true);
      try {
        photo = await agent.Photos.details(id);
        this.setPhoto(photo!); 
        runInAction(() => {
          this.selectedPhoto = photo!;
        });
        this.setLoadingInitial(false);
        return photo!;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };
  
  private setPhoto = (photo: Photo) => {
    photo.date = photo.date ? new Date(photo.date) : null;
    this.photoRegistery.set(photo.id, photo);
  };


  private getPhoto = (id: string) => {
    return this.photoRegistery.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  deletePhoto = async (id: string) => {
    this.loading = true;
    try {
        await agent.Photos.delete(id);
        runInAction(() => {
            this.photoRegistery.delete(id);
            this.loading = false;
        })
    } catch (error) {
        console.log(error);
        runInAction(() => {
            this.loading = false;
        })
    }
  }

  editPhoto = async (photo: Photo) => {
    this.loading = true;
    try {
      await agent.Photos.update(photo);
      runInAction(() => {
        this.photoRegistery.set(photo.id, photo);
        this.selectedPhoto = photo;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
