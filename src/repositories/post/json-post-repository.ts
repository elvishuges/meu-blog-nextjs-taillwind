import { PostModel } from "@/models/post-model";
import { PostRepository } from "./post-repository";
import { readFile, writeFile } from "fs/promises";

import { resolve } from "path";
import { timeLog } from "console";
const ROOT_DIR = process.cwd(); // current work dir
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);
const SIMULATE_WAIT_IN_MS = 5000;

export class JsonPostRespository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts.filter((p) => p.published);
  }

  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id == id);
    if (!post) throw new Error(`Post não encontrado para id "${id}"`);
    return post;
  }
  async findBySlug(slug: string): Promise<PostModel | null> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.slug == slug);
    if (!post) throw new Error(`Post não encontrado para slug "${slug}"`);
    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRespository();
