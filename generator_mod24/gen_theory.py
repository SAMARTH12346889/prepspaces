# -*- coding: utf-8 -*-
"""
Combines theory generator parts 1, 2, and 3 for Module 24.
"""

from gen_theory_part1 import generate_theory_part1
from gen_theory_part2 import generate_theory_part2
from gen_theory_part3 import generate_theory_part3

def generate_theory_sections():
    return (
        generate_theory_part1()
        + "\n\n"
        + generate_theory_part2()
        + "\n\n"
        + generate_theory_part3()
    )
