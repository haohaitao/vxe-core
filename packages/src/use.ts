import { computed, inject, provide, ComputedRef } from 'vue'

import type { VxeComponentSizeType } from '../../types'

export function useSize (props: { size?: VxeComponentSizeType }) {
  // 组件尺寸上下文
  const xeSizeInfo = inject('xeSizeInfo', null as ComputedRef<VxeComponentSizeType> | null)
  const computeSize = computed(() => {
    return props.size || (xeSizeInfo ? xeSizeInfo.value : null)
  })
  provide('xeSizeInfo', computeSize)

  return { computeSize }
}
