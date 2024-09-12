const OOPConclusion = "Об'єктно-орієнтоване програмування (ООП) надає переваги в управлінні складними системами завдяки модульності, інкапсуляції, спадкуванню та поліморфізму. Воно підходить для великих проектів, де важлива структурована архітектура та повторне використання коду. Однак, цей підхід може бути складнішим для новачків і менш ефективним за ресурсами в порівнянні з процедурним підходом.";
const proceduralConclusion = "Процедурне програмування є простішим і більш ефективним для невеликих програм, орієнтованих на виконання послідовних інструкцій або процедур. Воно забезпечує прозорість і швидкість розробки для невеликих проектів. Проте, цей підхід має свої обмеження в масштабованості, повторюваності коду та управлінні складними системами, оскільки не має інструментів для інкапсуляції та управління залежностями, як у ООП.";

document.getElementById('OOPConclusion').innerText = OOPConclusion;
document.getElementById('proceduralConclusion').innerText = proceduralConclusion;

document.getElementById('OOPConclusion').style.color = "green";
document.getElementById('proceduralConclusion').style.color = "red";

document.getElementById('OOPConclusion').style.maxWidth = "500px";

document.getElementById('proceduralConclusion').style.maxWidth = "500px";

document.getElementById('block').style.display = "flex";
document.getElementById('block').style.justifyContent = "space-beetwen";
document.getElementById('block').style.gap = "90px";



