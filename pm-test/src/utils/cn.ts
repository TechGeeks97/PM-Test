/**
 * Utility function for combining class names
 * Similar to clsx or classnames library
 */

type ClassValue = string | number | boolean | undefined | null;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}




