
export interface IClassRoom {
    id: number;
    idCourse?: number | null;
    img: string;
    title: string;
    description: string;
    linkVideo: string;
    linkIdVideo: string;
    tag: string;
    category: string;
}

export interface ICourse {
    id: number;
    title: string;
    description: string;
    tag: string;
    classrooms: IClassRoom[]
}