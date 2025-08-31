import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomNum(m: number, n: number, decimals?: number): number {
  if (decimals == null) {
    return Math.floor(Math.random() * (n - m + 1)) + m; // 정수
  }
  // 소수: [m, n) 구간에서 뽑고 원하는 자리수로 반올림
  const x = Math.random() * (n - m) + m;
  return Number(x.toFixed(decimals));
}


export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function deepMerge<T extends object>(target: T, source: DeepPartial<T>): T {
  const output = { ...target };
  
  if (!source || typeof source !== 'object') {
    return output;
  }

  Object.keys(source).forEach(key => {
    if (key in target) {
      const targetValue = target[key as keyof T];
      const sourceValue = source[key as keyof DeepPartial<T>];

      if (sourceValue === undefined) {
        return;
      }

      if (
        targetValue &&
        typeof targetValue === 'object' &&
        sourceValue &&
        typeof sourceValue === 'object' &&
        !Array.isArray(targetValue) &&
        !Array.isArray(sourceValue)
      ) {
        output[key as keyof T] = deepMerge(targetValue, sourceValue);
      } else {
        output[key as keyof T] = sourceValue as T[keyof T];
      }
    }
  });

  return output;
}