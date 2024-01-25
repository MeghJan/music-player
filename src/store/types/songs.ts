export interface ISong {
    id: number,
    songName: string;
    artistName: string;
    trackNumber: number;
    file?: File;
}

export interface IInitialSongs {
    songsList: ISong[];
    song: ISong | null;
}