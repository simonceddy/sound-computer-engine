import localforage from 'localforage';

export const SCE_PROJECTS_PREFIX = 'se_sce_projects';
export const SCE_METADATA_PREFIX = 'se_sce_metadata';
export const SCE_LAST_PROJECT_PREFIX = 'se_sce_lastprojid';

export async function loadProjects() {
  try {
    const project = await localforage.getItem(SCE_PROJECTS_PREFIX);
    // console.log(project);
    return project;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function persist(state) {
  // console.log(state);
  if (!state.project || !state.project.id) {
    // console.log('project requires an id');
    return false;
  }
  try {
    const projects = await loadProjects();
    const res = await localforage.setItem(SCE_PROJECTS_PREFIX, {
      ...projects,
      [state.project.id]: state
    });
    return res;
    // console.log(res);
    // return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function persistMetadata(state) {
  try {
    const res = await localforage.setItem(SCE_METADATA_PREFIX, state);
    // console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function load(projectId) {
  try {
    const project = await loadProjects()
      .then((projects) => projects[projectId] || null);
    // console.log(project);
    return project;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function loadMetadata() {
  try {
    const data = await localforage.getItem(SCE_METADATA_PREFIX);
    // console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
