import axios from 'axios';

export const FETCH_AFFIXES = 'FETCH_AFFIXES';

export function fetchAffixes(region, callback) {
  const url = `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=en`;
  const request = axios.get(url);

  return {
    type: FETCH_AFFIXES,
    payload: request
  };
}
