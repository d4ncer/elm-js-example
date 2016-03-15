module CounterStore where

type alias Counter = { value: Int }

type Action = Increment | Decrement

update: Action -> Counter -> Counter
update action counter =
  case action of
    Increment ->
      { counter | value = counter.value + 1 }

    Decrement ->
      { counter | value = counter.value - 1 }

model0: Counter
model0 = { value = 0 }

actions: Signal Action
actions =
  Signal.mergeMany
        [
         Signal.map (always Increment) dispatchIncrement,
         Signal.map (always Decrement) dispatchDecrement
        ]

modelChanges: Signal Counter
modelChanges = Signal.foldp update model0 actions

port counterChanges : Signal Int
port counterChanges = Signal.map .value modelChanges

port dispatchIncrement : Signal ()
port dispatchDecrement : Signal ()

