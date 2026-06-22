

export class ImageLoader {

  imageLoadStates:Array<boolean> = [];
  allImagesLoaded:boolean=false;

  constructor(imageLength:number) {
    this.imageLoadStates = Array(imageLength).fill(false)
  }

  onImageLoad(index: number): void {
    this.imageLoadStates[index] = true;
    this.checkAllImagesLoaded();
  }

  onImageError(index: number): void {
    console.error(`Error al cargar la imagen en índice ${index}`);
    this.imageLoadStates[index] = true;
    this.checkAllImagesLoaded();
  }

  checkAllImagesLoaded(): void {
    this.allImagesLoaded = this.imageLoadStates.every(state => state);
  }
}
