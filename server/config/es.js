import axios from "axios";

const search = async (searchTerm) => {
  let data = JSON.stringify({
    query: {
      bool: {
        should: [
          {
            match: {
              name: {
                query: searchTerm,
                operator: "or",
                boost: 5,
              },
            },
          },
          {
            multi_match: {
              fields: ["fullText^1", "fullTextBoosted^5"],
              query: searchTerm,
              fuzziness: "1",
            },
          },
        ],
      },
    },
    sort: [
      {
        _score: {
          order: "desc",
        },
      },
    ],
    from: 0,
    size: 10,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://e8b77b4e16fb487ab7afb73a68b19224.us-central1.gcp.cloud.es.io/v1/_search",
    headers: {
      Authorization:
        "ApiKey alhXVTVvc0JFbWQ5ejNwTHVlZGE6c1RpODZIdTdSOXE4bzd0Zy1hSWhiZw==",
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await axios.request(config)
    return res.data
   
};

const esService = {search}
export default esService;

// route("/api/search/", es.search)
