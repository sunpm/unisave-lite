/// <reference path="../../uni-pages"/>

import { objectToQueryString } from '@pmun/utils'
import { useRouter } from '@uni-helper/uni-use'

const { navigate, redirect } = useRouter()

export function useNavigation() {
  /**
   *
   * @param {NavigateToOptions['url']} path
   * @param [params]
   */
  function navigateTo(path, params) {
    params = params ?? {}
    return navigate({
      url: path + (objectToQueryString(params) && `?${objectToQueryString(params)}`),
    })
  }
  /**
   *
   * @param {NavigateToOptions['url']} path
   * @param [params]
   */
  function redirectTo(path, params) {
    params = params ?? {}
    return redirect({
      url: path + (objectToQueryString(params) && `?${objectToQueryString(params)}`),
    })
  }
  return {
    navigateTo,
    redirectTo,
    navigateToHi: (options) => {
      navigateTo('/pages/hi', options)
    },
    navigateToIndex: () => {
      navigateTo('/pages/index/index')
    },
  }
}
