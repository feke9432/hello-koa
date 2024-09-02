import { Shuba69Filter } from "./shuba69";
import { WeilaitianwangFilter } from "./weilaitianwang";
export async function filterFactory (url: string, type: 'chapters'| 'content') {
  if (!url) {
    throw new Error('url is required');
  }

  if (url.includes('weilaitianwang')) {
    const filters = new WeilaitianwangFilter();
    if (type === 'chapters') {
      return filters.chapters(url);
    } else if (type === 'content') {
      return filters.content(url);
    }
  } else if (url.includes('69shuba')) {
    const filters = new Shuba69Filter();
    console.log('type ', '69shuba', type);
    try {
      if (type === 'chapters') {
        return filters.chapters(url);
      } else if (type === 'content') {
        return filters.content(url);
      }
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error('url is not supported');
  }
}

