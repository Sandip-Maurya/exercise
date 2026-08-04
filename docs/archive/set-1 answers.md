# Mathematics MCQ Test — Answer Key

Companion to [`advanced-math-mcq.md`](./advanced-math-mcq.md).

---

### Q1 — **B**

Use $\log a + \log b = \log(ab)$:

$$\log_2\big((x-1)(x+1)\big) = 3 \implies (x-1)(x+1) = 2^3 = 8.$$

So $x^2 - 1 = 8$, hence $x^2 = 9$ and $x = 3$ (domain requires $x > 1$).

Check: $\log_2 2 + \log_2 4 = 1 + 2 = 3$.

### Q2 — **B**

First term $a = 15$, common ratio $r = \dfrac{1}{3}$ with $|r| < 1$, so

$$\sum_{n=0}^{\infty} ar^n = \dfrac{a}{1-r} = \dfrac{15}{1 - \tfrac{1}{3}} = \dfrac{15}{\tfrac{2}{3}} = \dfrac{45}{2} = 22.5.$$

### Q3 — **D**

Square both sides:

$$(\sin\theta + \cos\theta)^2 = \dfrac{1}{9} \implies \sin^2\theta + \cos^2\theta + 2\sin\theta\cos\theta = \dfrac{1}{9}.$$

So $1 + \sin 2\theta = \dfrac{1}{9}$, hence $\sin 2\theta = -\dfrac{8}{9}$.

### Q4 — **A**

Double-angle formula: $\tan 2\alpha = \dfrac{2\tan\alpha}{1 - \tan^2\alpha}$ with $\tan\alpha = \dfrac{1}{3}$:

$$\dfrac{2\cdot\tfrac{1}{3}}{1 - \left(\tfrac{1}{3}\right)^2} = \dfrac{\tfrac{2}{3}}{\tfrac{8}{9}} = \dfrac{2}{3}\cdot\dfrac{9}{8} = \dfrac{3}{4}.$$

### Q5 — **A**

Set $y = \dfrac{x-2}{x+1}$ and solve for $x$:

$$y(x+1) = x-2 \implies yx + y = x - 2 \implies y + 2 = x(1-y).$$

Thus $x = \dfrac{y+2}{1-y}$. Swapping variables gives $f^{-1}(x) = \dfrac{x+2}{1-x}$.

### Q6 — **B**

Taylor: $e^{3x} = 1 + 3x + \dfrac{(3x)^2}{2!} + O(x^3) = 1 + 3x + \dfrac{9x^2}{2} + O(x^3)$.

Numerator is $\dfrac{9x^2}{2} + O(x^3)$, so the limit is $\dfrac{9}{2}$.

(Alternatively, apply L'Hôpital twice to the $0/0$ form.)

### Q7 — **B**

For $x < 0$, $|x| = -x$, so $\dfrac{|x|}{x} = \dfrac{-x}{x} = -1$.

The left-hand limit is therefore $-1$.

### Q8 — **A**

Taylor: $\ln(1+x) = x - \dfrac{x^2}{2} + O(x^3)$.

So $\ln(1+x) - x = -\dfrac{x^2}{2} + O(x^3)$, and the limit is $-\dfrac{1}{2}$.

### Q9 — **C**

Divide numerator and denominator by $x^3$:

$$\dfrac{2 + \dfrac{1}{x^2}}{1 - \dfrac{1}{x^3}} \to \dfrac{2}{1} = 2 \quad \text{as } x \to \infty.$$

### Q10 — **B**

For $x \neq 3$, $\dfrac{x^2-9}{x-3} = x+3$.

Continuity at $x=3$ needs $k = \lim_{x\to 3}(x+3) = 6$.

### Q11 — **C**

By the Intermediate Value Theorem: if $f$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then $f$ has a root in $(a,b)$.

### Q12 — **A**

Chain rule: $\dfrac{dy}{dx} = \cos(x^2 e^x) \cdot \dfrac{d}{dx}(x^2 e^x)$.

Product rule: $\dfrac{d}{dx}(x^2 e^x) = 2x e^x + x^2 e^x = (2x + x^2)e^x$.

### Q13 — **C**

Differentiate implicitly: $2x + 2y\,y' = 0$, so $y' = -\dfrac{x}{y}$ (where $y \neq 0$).

### Q14 — **A**

$e^x = \displaystyle\sum_{n=0}^{\infty} \dfrac{x^n}{n!}$, so the coefficient of $x^3$ is $\dfrac{1}{3!} = \dfrac{1}{6}$.

### Q15 — **B**

$f'(x) = 3x^2 - 3 = 3(x^2-1)$, so critical points are $x = \pm 1$.

$f''(x) = 6x$: $f''(-1) < 0$ (local max), $f''(1) > 0$ (local min).

### Q16 — **B**

Integration by parts with $u = x$, $dv = e^x\,dx$:

$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x-1)+C.$$

### Q17 — **A**

Use $\sin^2 x = \dfrac{1 - \cos 2x}{2}$:

$$\int \sin^2 x\,dx = \int \dfrac{1 - \cos 2x}{2}\,dx = \dfrac{x}{2} - \dfrac{\sin 2x}{4} + C.$$

### Q18 — **A**

Partial fractions: $\dfrac{1}{x^2-1} = \dfrac{1/2}{x-1} - \dfrac{1/2}{x+1}$.

Integrating gives $\dfrac{1}{2}\ln|x-1| - \dfrac{1}{2}\ln|x+1| + C = \dfrac{1}{2}\ln\left|\dfrac{x-1}{x+1}\right| + C$.

### Q19 — **A**

Fundamental Theorem of Calculus with chain rule: if $F(x) = \int_a^{g(x)} f(t)\,dt$, then $F'(x) = f(g(x))\,g'(x)$.

Here $F'(x) = \cos(x^2) \cdot 2x$.

### Q20 — **B**

$$\int_1^{\infty} x^{-2}\,dx = \lim_{b\to\infty}\left[-\dfrac{1}{x}\right]_1^b = \lim_{b\to\infty}\left(-\dfrac{1}{b} + 1\right) = 1.$$

### Q21 — **B**

Use $\cos^2 x = \dfrac{1 + \cos 2x}{2}$:

$$\int_0^{\pi/2} \cos^2 x\,dx = \int_0^{\pi/2} \dfrac{1 + \cos 2x}{2}\,dx = \left[\dfrac{x}{2} + \dfrac{\sin 2x}{4}\right]_0^{\pi/2} = \dfrac{\pi}{4}.$$

### Q22 — **A**

Curves meet when $x = x^2$, so $x = 0$ or $x = 1$. For $x \in [0,1]$, $x \ge x^2$, so

$$\text{Area} = \int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}.$$

### Q23 — **A**

Separable: $\dfrac{dy}{y} = 3\,dx$ gives $\ln|y| = 3x + C$, so $y = Ae^{3x}$.

$y(0) = 4$ implies $A = 4$, hence $y = 4e^{3x}$.

### Q24 — **C**

$A$ is upper triangular, so $\det(A)$ is the product of the diagonal entries:

$$\det(A) = 1 \cdot 4 \cdot 6 = 24.$$

### Q25 — **B**

$A$ is upper triangular, so the eigenvalues are the diagonal entries $4$ and $2$.

### Q26 — **C**

$\det(A) = 0$ means $A$ is singular (not invertible), so the homogeneous system $Ax = 0$ has a nontrivial solution.

### Q27 — **A**

$\det(A) = 1\cdot4 - 2\cdot3 = -2$.

$$A^{-1} = \dfrac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \dfrac{3}{2} & -\dfrac{1}{2} \end{pmatrix}.$$

### Q28 — **B**

Row 2 is twice row 1, so those two rows are dependent. Row 3 is not a multiple of row 1, so the rank is $2$.

### Q29 — **B**

$Ax = 0$ gives $x + 2y = 0$, so $x = -2y$. Solutions are multiples of $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$, equivalently spanned by $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$.

### Q30 — **C**

For an $n \times n$ matrix, $\det(cA) = c^n \det(A)$.

Here $n = 3$ and $c = 2$, so $\det(2A) = 2^3 \cdot 5 = 8 \cdot 5 = 40$.

---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | B | 11 | C | 21 | B |
| 2 | B | 12 | A | 22 | A |
| 3 | D | 13 | C | 23 | A |
| 4 | A | 14 | A | 24 | C |
| 5 | A | 15 | B | 25 | B |
| 6 | B | 16 | B | 26 | C |
| 7 | B | 17 | A | 27 | A |
| 8 | A | 18 | A | 28 | B |
| 9 | C | 19 | A | 29 | B |
| 10 | B | 20 | B | 30 | C |
