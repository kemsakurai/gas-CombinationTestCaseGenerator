import json
from allpairspy import AllPairs


def all_pair_test_cases(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    all_pairs = AllPairs(request_json)
    results = [];

    for pairs in all_pairs:
        results.append(pairs)
    return json.dumps(results, ensure_ascii=False)
