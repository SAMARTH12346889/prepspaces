# -*- coding: utf-8 -*-
"""
Module 22 Theory Sections: Parts 1 to 20
Full fidelity, zero information loss, combining Part 1 and Part 2.
"""

from gen_theory_part1 import get_theory_part1
from gen_theory_part2 import get_theory_part2

def generate_theory_sections():
    part1 = get_theory_part1().strip()
    part2 = get_theory_part2().strip()
    return f'''
        {{/* Theory Section Container */}}
        <section id="theory" className="space-y-16">
{part1}
{part2}
        </section>
    '''
