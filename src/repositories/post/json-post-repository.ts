import { PostModel } from "@/models/post-model";
import { PostRepository } from "./post-repository";
import { readFile, writeFile } from "fs/promises";

import { resolve } from "path";
const ROOT_DIR = process.cwd(); // current work dir
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRespository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id == id);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
}
console.log(ROOT_DIR);

export const postRepository: PostRepository = new JsonPostRespository();
(async () => {
  const post = await postRepository.findById(
    "99f8add4-7684-4c16-a316-616271db199e"
  );
  console.log(post);
})();
