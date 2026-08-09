from dataclasses import dataclass


@dataclass(frozen=True)
class HomePage:
    title: str
    tagline: str
    status: str
