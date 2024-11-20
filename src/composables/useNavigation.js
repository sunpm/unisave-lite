/// <reference path="../../uni-pages"/>

import { getPathQueryString } from '@/utils'
import { useRouter } from '@uni-helper/uni-use'

const { navigate, redirect } = useRouter()

export function useNavigation() {
  /**
   *
   * @param {NavigateToOptions['url']} path
   * @param [params]
   */
  function navigateTo(path, params) {
    return navigate({
      url: getPathQueryString(path, params),
    })
  }
  /**
   *
   * @param {NavigateToOptions['url']} path
   * @param [params]
   */
  function redirectTo(path, params) {
    return redirect({
      url: getPathQueryString(path, params),
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
