import ApiFilterGroup from "./ApiFilterGroup";
import ApiFilter from "./ApiFilter";
import {Observable} from "rxjs";
import ApiRoutes from './ApiRoutes';

class SectionApi {
    static async GetSections(page: number = 1, itemsPerPage: number = 25, filter: ApiFilter|ApiFilterGroup = null) {
       
            let route = ApiRoutes.SECTION;
            if ( filter !== undefined && filter !== null ) {
                route += '?filter=' + encodeURIComponent(JSON.stringify(filter)) + '&';
            } else {
                route += '?';
            }

            route += 'page=' + encodeURIComponent(page);
            route += '&itemsPerPage=' + encodeURIComponent(itemsPerPage);

            try {
                let response = await fetch(
                  route
                );
              console.log({"response":response})
                return response.json();
              } catch (error) {
                console.error(error);
              }
    }
}


export default SectionApi;