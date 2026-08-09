from dataclasses import dataclass


@dataclass(frozen=True)
class PublicMessage:
    value: str

    def __post_init__(self) -> None:
        if not self.value.strip():
            raise ValueError('Public messages cannot be empty.')
