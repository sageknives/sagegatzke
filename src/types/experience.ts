export interface Accomplishment {
  description: string;
}
export interface Experience {
  title: string;
  accomplishments: Array<Accomplishment>;
}
