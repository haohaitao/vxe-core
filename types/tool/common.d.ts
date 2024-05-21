import { App, VNode } from 'vue'

/**
 * 定义组件
 */
export type defineVxeComponent<
  P = { [key: string]: any },
  E = { [key: string]: any },
  S = { [key: string]: (...args: any[]) => any }
> = ({
  new (): {
    $props: P & E,
    $slots: S
  }
} & {
  install(app: App): void
})

/**
 * 组件通用的基础参数
 */
export interface VxeComponentBaseOptions {
  xID: string
}

/**
 * 组件事件参数
 */
export interface VxeComponentEventParams {
  $event: Event
}

/**
 * 全局事件默认参数
 */
export interface VxeComponentEvent<E = Event> {
  $event: E
  stopPropagation(): void
  preventDefault(): void
  target: any
}

/**
 * 组件尺寸类型
 */
export type VxeComponentSizeType = null | '' | 'medium' | 'small' | 'mini'

/**
 * 组件对齐方式
 */
export type VxeComponentAlignType = null | '' | 'left' | 'right' | 'center'

/**
 * 组件状态
 */
export type VxeComponentStatusType = null | '' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'error'

/**
 * 组件样式类型
 */
export type VxeComponentStyleType = Record<string, string | number>

/**
 * 组件 className 类型
 */
export type VxeComponentClassNameType = Record<string, boolean>

/**
 * 组件插槽类型
 */
export type VxeComponentSlotType = VNode | string | number
