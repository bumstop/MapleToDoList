# 개발중 발생한 오류 모음

## `useRef`를 사용해 `input` 을 지정했는데 에러가 발생했다.

**SearchBox.tsx**

`useRef`를 사용해 `input` 을 지정했는데 에러가 발생했다.

```tsx
export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>();

  return (
    <>
      <input type="text" placeholder="캐릭터 검색" id="search-input" ref={searchInputRef} />
    </>
  );
}
```

**`input` 부분의 `ref` 에서 해당 에러 메시지가 발생한다.**

`MutableRefObject<HTMLInputElement | undefined>` 형식은 `LegacyRef<HTMLInputElement> | undefined` 형식에 할당할 수 없습니다.

`MutableRefObject<HTMLInputElement | undefined>` 형식은 `RefObject<HTMLInputElement>` 형식에 할당할 수 없습니다.

`current` 속성의 형식이 호환되지 않습니다.

`HTMLInputElement | undefined` 형식은 `HTMLInputElement | null` 형식에 할당할 수 없습니다.  
`undefined` 형식은 `HTMLInputElement | null` 형식에 할당할 수 없습니다.

**아래와 같이 `useRef` 에 `null` 을 넣어주니 에러가 사라졌다.**

```tsx
const searchInputRef = useRef<HTMLInputElement>(null);
```

**왜 그럴까?**

- `useRef` 와 `MutableRefObject`

  `useRef` 는 아래와 같은 형태로 사용된다.

  ```tsx
  const searchInputRef = useRef<HTMLInputElement>();

  // 위와 동일하다
  const searchInputRef = useRef<HTMLInputElement | undefined>(undefined);
  ```

  이렇게 하면 `searchInputRef` 의 타입은 `MutableRefObject<HTMLInputElement | undefined>`가 된다.

  `MutableRefObject` 는 아래와 같은 인터페이스를 가지고 있다.

  ```tsx
  interface MutableRefObject<T> {
    current: T;
  }
  ```

  따라서, `searchInputRef` 는 `current` 속성을 가지며, `current` 는 `HTMLInputElement` 또는 `undefined` 를 가지게 된다.

<br>

- `LegacyRef` 와 `RefObject`

  `React` 컴포넌트의 `ref` 속성은 기본적으로 `LegacyRef` 또는 `RefObject` 타입을 기대한다.

  `LegacyRef` 와 `RefObject` 는 아래와 같은 타입과 인터페이스를 가지고 있다.

  ```tsx
  type LegacyRef<T> = string | ((instance: T | null) => void) | RefObject<T> | null;

  interface RefObject<T> {
    readonly current: T | null;
  }
  ```

  따라서, `RefObject` 타입을 기대하게 된다.  
  `RefObject` 는 `current` 가 읽기 전용(readonly)이며, `null` 을 가질 수 있다.

**결론적으로**

`MutableRefObject<HTMLInputElement | undefined>` 는 `RefObject<HTMLInputElement>` 타입과 호환되지 않기 때문에 에러가 발생한다.

따라서, `useRef` 를 사용할 때 초기값을 `null` 로 설정하여 타입이 `RefObject<HTMLInputElement>` 와 일치하도록 한다.

<br/>

## `promise` 객체에서 리턴된 result 값 꺼내기

`getOcid` 는 `promise` 객체를 반환한다.

```tsx
const ocid = getOcid(nickname);
console.log(ocid);
```

![promise_console](./trouble_image/promise_console.png)

<br/>

`getOcid()` 앞에 `await` 를 붙인 후 할당해주니 `ocid` 의 값에 PromiseResult의 값이 할당된것을 확인 할 수 있다.

```tsx
const ocid = await getOcid(nickname);
console.log(ocid);
```

![promiseawait_console](./trouble_image/promiseawait_console.png)

**왜 그럴까?**

`getOcid()` 는 promise 객체를 반환하기 떄문에 `await` 를 사용해 promise의 처리가 끝날때까지 기다린 후 `ocid` 에 그 값을 할당해야 result값이 할당된다.

<br/>

## base64 형식 문자열을 이미지로 넣는법

**func > nexonOpenApi.ts , returnGuildMark.ts**

넥슨 api에서 길드마크 정보는, 길드마크 또는 커스텀길드마크 둘 중 하나다.

```tsx
export const returnGuildMark = async (guildId: string) => {
  const guildBasicInfo = await getGuildBasicInfo(guildId);

  if (guildBasicInfo) {
    if (guildBasicInfo.guild_mark) return guildBasicInfo.guild_mark;
    else return "data:image/png;base64," + guildBasicInfo.guild_mark_custom;
  }
};
```

길드마크의 경우 일반적인 URL을 가지고 있다.

**커스텀 길드마크의 경우 base64형식으로 인코딩된 문자열을 반환해준다.**

이 문자열을 디코딩하면 이미지가되는데 `img` 태그의 `src` 속성안에 표시해주면 된다.

- `data:image/png;base64,`  
  데이터가 `png` 형식의 파일이라는 것을 표시해주고 base64 형식으로 디코딩하라는 뜻이다.

<br/>
