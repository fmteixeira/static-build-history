export declare module Pipeline {
  export interface ObjectAttributes {
    id: number;
    ref: string;
    tag: boolean;
    sha: string;
    before_sha: string;
    source: string;
    status: string;
    detailed_status: string;
    stages: string[];
    created_at: string;
    finished_at: string;
    duration: number;
    queued_duration: number;
    variables: any[];
  }

  export interface User {
    id: number;
    name: string;
    username: string;
    avatar_url: string;
    email: string;
  }

  export interface Project {
    id: number;
    name: string;
    description?: any;
    web_url: string;
    avatar_url?: any;
    git_ssh_url: string;
    git_http_url: string;
    namespace: string;
    visibility_level: number;
    path_with_namespace: string;
    default_branch: string;
    ci_config_path: string;
  }

  export interface Author {
    name: string;
    email: string;
  }

  export interface Commit {
    id: string;
    message: string;
    title: string;
    timestamp: Date;
    url: string;
    author: Author;
  }

  export interface User2 {
    id: number;
    name: string;
    username: string;
    avatar_url: string;
    email: string;
  }

  export interface Runner {
    id: number;
    description: string;
    active: boolean;
    tags: string[];
  }

  export interface ArtifactsFile {
    filename: string;
    size: number;
  }

  export interface Build {
    id: number;
    stage: string;
    name: string;
    status: string;
    created_at: string;
    started_at: string;
    finished_at: string;
    duration: number;
    queued_duration: number;
    when: string;
    manual: boolean;
    allow_failure: boolean;
    user: User2;
    runner: Runner;
    artifacts_file: ArtifactsFile;
    environment?: any;
  }

  export interface RootObject {
    object_kind: string;
    object_attributes: ObjectAttributes;
    merge_request?: any;
    user: User;
    project: Project;
    commit: Commit;
    builds: Build[];
  }
}
