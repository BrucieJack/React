export const getEpisodes = (page) => ({ type: "GET_EPISODES", payload: page });

export const putEpisodes = (data) => ({ type: "PUT_EPISODES", payload: data });

export const getEpisodeById = (id) => ({
  type: "GET_EPISODE_BY_ID",
  payload: id,
});

export const putEpisode = (data) => ({
  type: "PUT_EPISODE",
  payload: data,
});
