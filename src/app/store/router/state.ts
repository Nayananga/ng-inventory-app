import { NavigationExtras, RouterStateSnapshot, Params } from '@angular/router';
import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

// Reducer name config
export const routerStateKey = 'routerReducer';

// Router action payload
export interface RouterActionPayload {
  path: string[] | any[];
  query?: object;
  extras?: NavigationExtras;
}

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  }
}

// Initial state
export const routerInitialState = <RouterState>null;

// Export some aliases
export type RouterState = RouterReducerState<RouterStateUrl>;
