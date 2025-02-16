# Technical Presentation

[`Reveal.js`](https://github.com/hakimel/reveal.js.git) based presentations are
cool:

- Write with Markdown and HTML annotations.
- Style with SCSS (CSS).
- Use Code Highlighting and Animation.
- Versionize the presentation in Git.
- Use a `pandoc` first tooling approach which gives you lots of powers.
- and much more...

Note: These are speaker notes.

---

## Smart Presentation

### Smart Presentation

#### Smart Presentation

##### Smart Presentation

---

## Code

```cpp
int a = 3;
void foo(int a){
    std::cout << "Hello. click!" << std::endl;
    std::vector<int> v{1,2,4};
}
```

---

### Markdown

::: incremental

- _Carpe Diem_
- **b**) This is good.
- Inline Code `asd`
- [Links](http://coliru.stacked-crooked.com/)

:::

<br>

#### Code {.fragment}

::::::{.columns}

:::{.column width="50%" .fragment}

Normal:

```cpp
void foo(int a) {
  std::cout << "Hello. click!" << std::endl;
  std::vector<int>; v{1,2,4};
}
```

:::

:::{.column width="50%" .fragment}

Editable:

```cpp {contenteditable="true" line-numbers="|3-4|8-10" fragment-index="1,2"}
int a = 3;
void foo(int a) {
  std::cout << "Hello. click!" << 1 != 3 std::endl;
  std::vector<int>; v{1,2,4};
}
```

:::

::::::

---

### Code Focus

```cpp {line-numbers="1,2|3-8|all"}
int a = 3;
int a;
enum class C {A, B, C} b;
std::vector&lt;int&gt; c; // asd

int const * & const d;

using FuncPointer  = int (*)(float); // Type: Pointer to function.
using FuncReferenz = int (&)(float); // Type: Reference to function.
using Func =             int(float); // Type: Function.
```

::: incremental

- [Link 1](#/3/0/0)
- This is [important.]{.fragment}
- This is now important.

:::

---

## Funny Lua Filter

![](${meta:include-base-dir}/assets/images/diagram.svgbob){.svgbob}

---

## Disclaimer

Customized with ❤️ by Gabriel Nützi and Simon Spörri.
