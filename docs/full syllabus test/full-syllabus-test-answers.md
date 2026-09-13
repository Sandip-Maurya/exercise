# Full Syllabus Test — Answer Key

Companion to [`full-syllabus-test.md`](./full-syllabus-test.md).

---

#### Q1 — **C**

Factor: $\lvert(x-1)(x-2)\rvert=2\lvert x-1\rvert$. If $x=1$, both sides vanish, so $x=1$ is a solution. If $x\neq 1$, cancel to get $\lvert x-2\rvert=2$, hence $x=0$ or $x=4$. All three values work, so there are $3$ real solutions.

#### Q2 — **B**

$$
\dfrac{(x-2)(x-3)}{(x-1)(x-2)}\le 0,\qquad x\neq 1,\,2.
$$
For $x\neq 2$ this is $\dfrac{x-3}{x-1}\le 0$, whose solution is $1\le x\le 3$. Removing the undefined points $x=1$ and $x=2$ leaves $(1,2)\cup(2,3]$.

#### Q3 — **C**

$\sin A=\sin B$ gives $3x=n\pi+(-1)^{n}2x$. Even $n=2k$ yields $x=2k\pi$, none in $(0,2\pi)$. Odd $n=2k+1$ yields $x=(2k+1)\pi/5$. The values in $(0,2\pi)$ are
$$
\dfrac{\pi}{5},\ \dfrac{3\pi}{5},\ \pi,\ \dfrac{7\pi}{5},\ \dfrac{9\pi}{5},
$$
so there are $5$ solutions.

#### Q4 — **B**

From $\sin\theta+\sin^{2}\theta=1$ one gets $\cos^{2}\theta=\sin\theta$. Then
$$
\cos^{12}\theta+3\cos^{10}\theta+3\cos^{8}\theta+\cos^{6}\theta=(\cos^{4}\theta+\cos^{2}\theta)^{3}=(\sin^{2}\theta+\sin\theta)^{3}=1^{3}=1.
$$

#### Q5 — **A**

$$
f(x)=1-\dfrac{1}{x^{2}+x+2},\qquad x^{2}+x+2=\left(x+\dfrac{1}{2}\right)^{2}+\dfrac{7}{4}\ge\dfrac{7}{4}.
$$
Hence $\dfrac{1}{x^{2}+x+2}\in\left(0,\dfrac{4}{7}\right]$ and $f(x)\in\left[\dfrac{3}{7},1\right)$.

#### Q6 — **A**

Replace $x$ by $1-x$:
$$
f(1-x)+2f(x)=(1-x)^{2}.
$$
Together with $f(x)+2f(1-x)=x^{2}$, solve the linear system:
$$
\begin{aligned}
f(x)+2f(1-x)&=x^{2},\\
2f(x)+f(1-x)&=(1-x)^{2}.
\end{aligned}
$$
Eliminating $f(1-x)$ yields $3f(x)=x^{2}-4x+2$, so
$$
f(x)=\dfrac{x^{2}-4x+2}{3}.
$$

#### Q7 — **C**

$\sin^{-1}x=x+\dfrac{x^{3}}{6}+O(x^{5})$ and $\tan^{-1}x=x-\dfrac{x^{3}}{3}+O(x^{5})$, so
$$
\sin^{-1}x-\tan^{-1}x=\dfrac{x^{3}}{2}+O(x^{5})\implies\lim_{x\to 0}\dfrac{\sin^{-1}x-\tan^{-1}x}{x^{3}}=\dfrac{1}{2}.
$$

#### Q8 — **C**

$\cos x=1-\dfrac{x^{2}}{2}+O(x^{4})$ and $\cos 2x=1-2x^{2}+O(x^{4})$, so
$$
\cos x\cos 2x=1-\dfrac{5}{2}x^{2}+O(x^{4})\implies 1-\cos x\cos 2x=\dfrac{5}{2}x^{2}+O(x^{4}).
$$
The limit is $\dfrac{5}{2}$.

#### Q9 — **D**

$[x^{2}]$ (greatest integer function) jumps wherever $x^{2}$ is a positive integer. In $(-2,2)$ one has $x^{2}\in\{1,2,3\}$ at
$$
x=\pm 1,\ \pm\sqrt{2},\ \pm\sqrt{3},
$$
six points in all.

#### Q10 — **B**

$y^{2}=x+y$. Differentiating: $2yy'=1+y'$, so $y'=\dfrac{1}{2y-1}$. At $x=2$, $y^{2}-y-2=0$ and $y>0$ give $y=2$, hence $y'(2)=\dfrac{1}{3}$.

#### Q11 — **B**

Differentiating $x^{2}+xy+y^{2}=1$ yields $y'=-\dfrac{2x+y}{x+2y}$. Differentiating again and simplifying,
$$
y''=-\dfrac{3y}{(x+2y)^{2}}.
$$
At $(0,1)$ one gets $y''=-\dfrac{3}{4}$.

#### Q12 — **C**

$$
\dfrac{dy}{dx}=\dfrac{1+1/t^{2}}{1-1/t^{2}}=\dfrac{t^{2}+1}{t^{2}-1}.
$$
At $t=2$ the value is $\dfrac{5}{3}$.

#### Q13 — **C**

For $y^{2}=4x$, $m_{1}=\dfrac{2}{y}$; for $x^{2}=4y$, $m_{2}=\dfrac{x}{2}$. At $(4,4)$, $m_{1}=\dfrac{1}{2}$ and $m_{2}=2$, so
$$
\tan\theta=\left\lvert\dfrac{2-1/2}{1+2\cdot(1/2)}\right\rvert=\dfrac{3}{4}.
$$

#### Q14 — **B**

$f'(x)=3(x^{2}-1)=0$ at $x=\pm 1$. Evaluating,
$$
f(-2)=-2,\quad f(-1)=2,\quad f(1)=-2,\quad f(2)=2.
$$
The absolute minimum on $[-2,2]$ is $-2$.

#### Q15 — **A**

With $I_{n}=\displaystyle\int_{0}^{\pi/4}\tan^{n}x\, dx$ ($n>1$), one has $I_{n}+I_{n-2}=\dfrac{1}{n-1}$. Thus $I_{2}=1-\dfrac{\pi}{4}$ and
$$
I_{4}=\dfrac{1}{3}-I_{2}=\dfrac{\pi}{4}-\dfrac{2}{3}.
$$

#### Q16 — **A**

Let $I=\displaystyle\int_{0}^{\pi/2}\ln(\sin x)\, dx$. By symmetry, $\displaystyle\int_{0}^{\pi}\ln(\sin x)\, dx=2I$. Using $\sin x=2\sin(x/2)\cos(x/2)$,
$$
2I=\int_{0}^{\pi}\ln 2\, dx+\int_{0}^{\pi}\ln\!\bigl(\sin\tfrac{x}{2}\bigr)\, dx+\int_{0}^{\pi}\ln\!\bigl(\cos\tfrac{x}{2}\bigr)\, dx=\pi\ln 2+2I+2I,
$$
since each of the last two integrals equals $2I$ after the substitutions $t=x/2$ and the identity $\int_{0}^{\pi/2}\ln(\cos t)\, dt=I$. Hence $2I=\pi\ln 2+4I$, so $I=-\dfrac{\pi}{2}\ln 2$.

#### Q17 — **B**

Let $I$ be the given integral. The substitution $x\mapsto\pi-x$ yields
$$
2I=\pi\int_{0}^{\pi}\dfrac{\sin x}{1+\cos^{2}x}\, dx=\pi\int_{-1}^{1}\dfrac{du}{1+u^{2}}=\pi\cdot\dfrac{\pi}{2}=\dfrac{\pi^{2}}{2},
$$
so $I=\dfrac{\pi^{2}}{4}$.

#### Q18 — **B**

Partial fractions:
$$
\dfrac{1}{(1+x)(1+x^{2})}=\dfrac{1}{2}\left(\dfrac{1}{1+x}-\dfrac{x-1}{1+x^{2}}\right).
$$
Integrating from $0$ to $\infty$ gives $\dfrac{1}{2}\cdot\dfrac{\pi}{2}=\dfrac{\pi}{4}$.

#### Q19 — **A**

Let $I=\displaystyle\int_{0}^{\pi/4}\ln(1+\tan x)\, dx$. The substitution $x\mapsto\dfrac{\pi}{4}-x$ gives $\tan\!\left(\dfrac{\pi}{4}-x\right)=\dfrac{1-\tan x}{1+\tan x}$, so
$$
I=\int_{0}^{\pi/4}\ln\!\left(1+\dfrac{1-\tan x}{1+\tan x}\right)\, dx=\int_{0}^{\pi/4}\ln\!\left(\dfrac{2}{1+\tan x}\right)\, dx=\dfrac{\pi}{4}\ln 2-I.
$$
Hence $2I=\dfrac{\pi}{4}\ln 2$ and $I=\dfrac{\pi}{8}\ln 2$.

#### Q20 — **D**

The curves meet at $x=\pm 1$. The enclosed area is
$$
2\int_{0}^{1}\bigl((2-x^{2})-x\bigr)\, dx=2\left[2x-\dfrac{x^{3}}{3}-\dfrac{x^{2}}{2}\right]_{0}^{1}=\dfrac{7}{3}.
$$

#### Q21 — **B**

$$
\int_{0}^{3}e^{\lfloor x\rfloor}\, dx=\int_{0}^{1}1\, dx+\int_{1}^{2}e\, dx+\int_{2}^{3}e^{2}\, dx=1+e+e^{2}.
$$

#### Q22 — **B**

Let $c=\displaystyle\int_{0}^{1}y(t)\, dt$. Then $y'+2y=c$, so $y=\dfrac{c}{2}+Ke^{-2x}$. The conditions $y(0)=1$ and $\int_{0}^{1}y=c$ give
$$
c=\dfrac{2(e^{2}-1)}{3e^{2}-1},\qquad y(1)=\dfrac{e^{2}+1}{3e^{2}-1}.
$$

#### Q23 — **A**

For order $3$, $\operatorname{adj}(\operatorname{adj} M)=\lvert M\rvert M$. Taking $M=A^{-1}$ gives
$$
\operatorname{adj}\bigl(\operatorname{adj}(A^{-1})\bigr)=\lvert A^{-1}\rvert\,A^{-1}=\dfrac{1}{\lvert A\rvert}A^{-1}=\dfrac{1}{2}A^{-1}.
$$
(Alternatively: $\operatorname{adj}(A^{-1})=\lvert A^{-1}\rvert A=\dfrac{1}{2}A$, and $\operatorname{adj}\!\left(\dfrac{1}{2}A\right)=\dfrac{1}{4}\operatorname{adj} A=\dfrac{1}{4}\lvert A\rvert A^{-1}=\dfrac{1}{2}A^{-1}$.)

#### Q24 — **B**

Expanding and using $A^{2}=I$ (hence $A^{3}=A$ and $A^{5}=A$),
$$
(A-I)^{5}+(A+I)^{5}=2A^{5}+20A^{3}+10A=2A+20A+10A=32A.
$$

#### Q25 — **C**

A diagonal matrix with entries in $\{-1,0,1\}$ satisfies $A^{2}=I$ if and only if every diagonal entry is $\pm 1$. There are $2^{3}=8$ such matrices.

#### Q26 — **C**

Perform $R_{1}\to R_{1}-R_{3}$ and $R_{2}\to R_{2}-R_{3}$:
$$
\begin{vmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ \sin^{2}x & \cos^{2}x & 1+4\sin 2x \end{vmatrix}=1+4\sin 2x+\cos^{2}x+\sin^{2}x=2+4\sin 2x.
$$
At $x=\dfrac{\pi}{6}$, $\sin\dfrac{\pi}{3}=\dfrac{\sqrt{3}}{2}$, so the value is $2+2\sqrt{3}$.

#### Q27 — **B**

$f(t)=(t-1)^{2}(t+2)$, so
$$
f'(t)=3(t-1)(t+1)\implies f'(0)=-3.
$$

#### Q28 — **C**

Factoring $2^{i}$ from row $i$ and $2^{j}$ from column $j$ multiplies the determinant by $2^{1+2+3}\cdot 2^{1+2+3}=2^{12}$. Hence $\lvert Q\rvert=2^{12}\lvert P\rvert=2^{14}$.

#### Q29 — **C**

The coefficient determinant is
$$
\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 4 & \lambda \end{vmatrix}=\lambda-7.
$$
Unique solution $\iff\lambda\neq 7$.

#### Q30 — **B**

Nontrivial solutions exist precisely when the coefficient determinant vanishes:
$$
\begin{vmatrix} 1 & 1 & 1 \\ 2 & 3 & 1 \\ 3 & 5 & \lambda \end{vmatrix}=\lambda-1=0\implies\lambda=1.
$$
