# Differential Calculus Intermediate Test — Answer Key

Companion to [`differential-calculus-intermediate-test.md`](./differential-calculus-intermediate-test.md).

---

### Q1 — **B**

Since $\dfrac{1}{2}>0$, $\dfrac{1}{3}>0$ and $\dfrac{1}{2}\cdot\dfrac{1}{3}<1$,
$$
\tan^{-1}\dfrac{1}{2}+\tan^{-1}\dfrac{1}{3}=\tan^{-1}\left(\dfrac{\dfrac{1}{2}+\dfrac{1}{3}}{1-\dfrac{1}{2}\cdot\dfrac{1}{3}}\right)=\tan^{-1}1=\dfrac{\pi}{4}.
$$

### Q2 — **B**

For $x\neq 0$,
$$
f(-x)=\dfrac{-x}{e^{-x}-1}-\dfrac{x}{2}=\dfrac{x e^{x}}{e^{x}-1}-\dfrac{x}{2}=\dfrac{x}{e^{x}-1}+\dfrac{x}{2}=f(x).
$$
With $f(0)=1$, $f$ is even.

### Q3 — **B**

For $|x|<1$, set $x=\tan\theta$. Then $\dfrac{2x}{1+x^{2}}=\sin 2\theta$, so $y=2\theta=2\tan^{-1}x$. Differentiating gives $\dfrac{dy}{dx}=\dfrac{2}{1+x^{2}}$.

### Q4 — **C**

$f(1)=5$ and $f'(x)=3x^{2}+3$, so $f'(1)=6$. Therefore $(f^{-1})'(5)=\dfrac{1}{f'(1)}=\dfrac{1}{6}$.

### Q5 — **A**

Let $t=\sin x+\cos x\in[-\sqrt{2},\sqrt{2}]$. Then $\sin x\cos x=\dfrac{t^{2}-1}{2}$, so
$$
f=\dfrac{t^{2}+2t-1}{2}.
$$
On this interval the minimum is $-1$ (at $t=-1$) and the maximum is $\dfrac{1+2\sqrt{2}}{2}$ (at $t=\sqrt{2}$).

### Q6 — **B**

Taylor: $\tan x=x+\dfrac{x^{3}}{3}+o(x^{3})$, so $\dfrac{\tan x-x}{x^{3}}\to\dfrac{1}{3}$.

### Q7 — **B**

Rationalize:
$$
\sqrt{x^{2}+3x}-x=\dfrac{3x}{\sqrt{x^{2}+3x}+x}\to\dfrac{3}{2}.
$$

### Q8 — **C**

$$
\lim_{x\to 0}(\cos x)^{1/x^{2}}=\exp\lim_{x\to 0}\dfrac{\ln\cos x}{x^{2}}=\exp\lim_{x\to 0}\dfrac{-\tan x}{2x}=e^{-1/2}.
$$

### Q9 — **B**

Taylor: $e^{2x}=1+2x+\dfrac{(2x)^{2}}{2}+o(x^{2})=1+2x+2x^{2}+o(x^{2})$, so the limit is $2$.

### Q10 — **B**

$x^{x}=e^{x\ln x}$. Since $\lim_{x\to 0^{+}}x\ln x=0$, we get $x^{x}\to e^{0}=1$.

### Q11 — **C**

$\dfrac{1-\cos 2x}{x^{2}}=\dfrac{2\sin^{2}x}{x^{2}}\to 2$. So $k=2$.

### Q12 — **C**

$\dfrac{x^{3}-8}{x-2}=\dfrac{(x-2)(x^{2}+2x+4)}{x-2}=x^{2}+2x+4\to 12$ as $x\to 2$. So $k=12$.

### Q13 — **B**

$\lim_{x\to 0}\dfrac{\sin x}{x}=1\neq f(0)=2$, so $f$ is discontinuous at $0$. For $x\neq 0$, $f(x)=\dfrac{\sin x}{x}$ is continuous, so $f$ is continuous elsewhere.

### Q14 — **C**

$x|x|$ equals $x^{2}$ for $x\geq 0$ and $-x^{2}$ for $x<0$. Both one-sided derivatives at $0$ are $0$, so it is differentiable at $0$. The others have a corner or cusp at $0$.

### Q15 — **B**

Differentiate: $3x^{2}+3y^{2}y'-3(y+xy')=0$, so
$$
y'=\dfrac{y-x^{2}}{y^{2}-x}.
$$
At $\left(\dfrac{3}{2},\dfrac{3}{2}\right)$ this equals $-1$.

### Q16 — **B**

$\dfrac{dy}{dx}=\dfrac{a\sin\theta}{a(1-\cos\theta)}=\dfrac{\sin\theta}{1-\cos\theta}=\cot\dfrac{\theta}{2}$.

### Q17 — **A**

For $|x|<1$, $\dfrac{1+x}{1-x}=\tan\!\left(\dfrac{\pi}{4}+\tan^{-1}x\right)$, so $y=\dfrac{\pi}{4}+\tan^{-1}x$. Hence $\dfrac{dy}{dx}=\dfrac{1}{1+x^{2}}$.

### Q18 — **A**

$\ln|y|=\ln|\cos x|+\ln|\cos 2x|$ gives $\dfrac{y'}{y}=-\tan x-2\tan 2x$.

### Q19 — **D**

$\dfrac{dy}{dx}=f'(x^{2}+1)\cdot 2x=\sin((x^{2}+1)^{2})\cdot 2x$. At $x=1$: $2\sin 4$.

### Q20 — **B**

$\dfrac{f'}{f}=\dfrac{1}{1+x}+\dfrac{2x}{1+x^{2}}+\dfrac{4x^{3}}{1+x^{4}}$. At $x=1$: $\dfrac{1}{2}+1+2=\dfrac{7}{2}$ and $f(1)=8$, so $f'(1)=28$.

### Q21 — **B**

$2yy'=4a\Rightarrow y'=\dfrac{2a}{y}$. Differentiating again,
$$
y''=-\dfrac{2a}{y^{2}}y'=-\dfrac{4a^{2}}{y^{3}}.
$$

### Q22 — **C**

$f'(x)=e^{1-x}(1-x)$. This is positive for $x<1$ and negative for $x>1$, so $f$ is strictly increasing on $(-\infty,1)$.

### Q23 — **B**

$f'(x)=e^{-x}(1-x)=0$ at $x=1$. Since $f''(1)=-\dfrac{1}{e}<0$, $f(1)=\dfrac{1}{e}$ is the global maximum.

### Q24 — **B**

For a sphere of radius $5$, $r^{2}=25-\dfrac{h^{2}}{4}$. Then $V=\pi h\left(25-\dfrac{h^{2}}{4}\right)$ and $V'(h)=\pi\left(25-\dfrac{3h^{2}}{4}\right)=0$ gives $h=\dfrac{10\sqrt{3}}{3}$.

### Q25 — **C**

Minimize $d^{2}=x^{2}+(x^{2}-2)^{2}$. Setting the derivative to zero gives $x=0$ or $x=\pm\sqrt{\dfrac{3}{2}}$. At $x=0$, $d=2$; at $x=\pm\sqrt{\dfrac{3}{2}}$, $d^{2}=\dfrac{7}{4}$. So the closest points are $\left(\pm\sqrt{\dfrac{3}{2}},\dfrac{3}{2}\right)$.

### Q26 — **B**

$f'(c)=\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}=4$, so $2c=4$ and $c=2$.

### Q27 — **A**

$x^{2}+y^{2}=13^{2}=169$. With $x=5$, $y=12$. Differentiating gives $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$, so
$$
\left|\dfrac{dy}{dt}\right|=\dfrac{x}{y}\cdot\left|\dfrac{dx}{dt}\right|=\dfrac{5}{6}.
$$
The top slides down at $\dfrac{5}{6}\,\mathrm{m/s}$.

### Q28 — **B**

$f'(x)=3\cos x-4\sin x-k$. The expression $3\cos x-4\sin x$ has amplitude $5$, so $f'(x)\leq 0$ for all $x$ iff $k\geq 5$.

### Q29 — **B**

$f(x)=|x^{2}-1|$ fails to be differentiable where $x^{2}-1=0$, i.e. at $x=\pm 1$. Both lie in $(-2,2)$.

### Q30 — **B**

Take $y=\sqrt{x}$ near $x=25$: $dy=\dfrac{dx}{2\sqrt{x}}$. With $dx=1$,
$$
\sqrt{26}\approx 5+\dfrac{1}{10}=5.1.
$$

---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | B | 11 | C | 21 | B |
| 2 | B | 12 | C | 22 | C |
| 3 | B | 13 | B | 23 | B |
| 4 | C | 14 | C | 24 | B |
| 5 | A | 15 | B | 25 | C |
| 6 | B | 16 | B | 26 | B |
| 7 | B | 17 | A | 27 | A |
| 8 | C | 18 | A | 28 | B |
| 9 | B | 19 | D | 29 | B |
| 10 | B | 20 | B | 30 | B |
